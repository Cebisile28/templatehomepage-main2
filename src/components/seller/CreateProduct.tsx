import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

import ProductDetailsStep from "./ProductDetailsStep";
import PricingStep from "./PricingStep";
import MediaStep from "./MediaStep";
import ReviewStep from "./ReviewStep";
import ProgressBar from "./ProgressBar";

export type ProductFormData = {
  title: string;
  short_description: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
  status: "draft" | "active" | "archived";
  featured: boolean;
  image: File | null;
  files: File[];
};

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [product, setProduct] = useState<ProductFormData>({
    title: "",
    short_description: "",
    description: "",
    price: "",
    category: "",
    tags: [],
    status: "active",
    featured: false,
    image: null,
    files: [],
  });

  const updateProduct = (data: Partial<ProductFormData>) => {
    setProduct((previous) => ({ ...previous, ...data }));
  };

  const nextStep = () => {
    setError("");

    if (step === 1) {
      if (!product.title.trim()) {
        setError("Please enter a product title.");
        return;
      }
      if (!product.short_description.trim()) {
        setError("Please enter a short description.");
        return;
      }
      if (!product.category) {
        setError("Please select a product category.");
        return;
      }
    }

    if (step === 2) {
      const price = Number(product.price);
      if (!product.price || !Number.isFinite(price) || price <= 0) {
        setError("Please enter a valid product price.");
        return;
      }
    }

    if (step === 3) {
      if (!product.image) {
        setError("Please upload a product image.");
        return;
      }
      if (product.files.length === 0) {
        setError("Please upload at least one digital product file.");
        return;
      }
    }

    setStep((previous) => Math.min(previous + 1, 4));
  };

  const previousStep = () => {
    setError("");
    setStep((previous) => Math.max(previous - 1, 1));
  };

  const generateSlug = (title: string) => {
    const baseSlug = title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    return `${baseSlug}-${Date.now()}`;
  };

  const uploadImage = async (productId: string, file: File) => {
    const fileExt = file.name.split(".").pop() || "jpg";
    const filePath = `${productId}/thumbnail.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const uploadFiles = async (productId: string, files: File[]) => {
    for (const file of files) {
      const safeFileName = file.name.replace(/[^\w.-]/g, "_");
      const filePath = `${productId}/${Date.now()}-${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("product-files")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase
        .from("product_files")
        .insert({
          product_id: productId,
          file_path: filePath,
          storage_path: filePath,
          file_name: file.name,
          file_type: file.type,
          file_size: file.size,
          is_primary: false,
        });

      if (insertError) throw insertError;
    }
  };

  const publishProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;
      if (!user) throw new Error("Seller not logged in.");

      const { data: createdProduct, error: createError } = await supabase
        .from("products")
        .insert({
          seller_id: user.id,
          title: product.title.trim(),
          short_description: product.short_description.trim(),
          description: product.description,
          price: Number(product.price),
          category: product.category,
          tags: product.tags,
          slug: generateSlug(product.title),
          status: product.status,
          featured: product.featured,
        })
        .select()
        .single();

      if (createError) throw createError;

      const productId = createdProduct.id;

      if (product.image) {
        const imageUrl = await uploadImage(productId, product.image);

        const { error: imageUpdateError } = await supabase
          .from("products")
          .update({ image_url: imageUrl })
          .eq("id", productId);

        if (imageUpdateError) throw imageUpdateError;
      }

      if (product.files.length > 0) {
        await uploadFiles(productId, product.files);
      }

      navigate("/seller/products");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to create product."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ProductDetailsStep
            product={product}
            updateProduct={updateProduct}
          />
        );
      case 2:
        return (
          <PricingStep product={product} updateProduct={updateProduct} />
        );
      case 3:
        return <MediaStep product={product} updateProduct={updateProduct} />;
      case 4:
        return <ReviewStep product={product} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 text-slate-800 dark:text-slate-100">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Create Product
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Publish your digital product on Boostify Marketplace.
        </p>
      </div>

      <ProgressBar step={step} />

      {error && (
        <div className="rounded-xl bg-red-100 p-4 text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {renderStep()}
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={() =>
            step === 1 ? navigate("/seller/products") : previousStep()
          }
          disabled={loading}
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {step === 1 ? "Cancel" : "Back"}
        </button>

        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="rounded-xl bg-sky-500 px-8 py-3 font-bold text-white transition hover:bg-sky-600"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            disabled={loading}
            onClick={() => void publishProduct()}
            className="rounded-xl bg-sky-500 px-8 py-3 font-bold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Product"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;