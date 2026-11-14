import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import FileUploader from "./FileUploader";

type ProductFormProps = {
  sellerId: string;
  onSubmit: (product: {
    title: string;
    shortDescription: string;
    description: string;
    category: string;
    tags: string[];
    price: number;
    status: "draft" | "active";
    image: File | null;
    files: File[];
  }) => Promise<void>;
};

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-sky-900/40";

const ProductForm: React.FC<ProductFormProps> = ({
  sellerId,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState<"draft" | "active">("draft");
  const [image, setImage] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!sellerId) {
      setError("You must be logged in.");
      return;
    }

    if (!title.trim()) {
      setError("Product title is required.");
      return;
    }

    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      return;
    }

    if (!price || Number(price) <= 0 || !Number.isFinite(Number(price))) {
      setError("Please enter a valid price.");
      return;
    }

    if (!image) {
      setError("Please upload a product image.");
      return;
    }

    if (files.length === 0) {
      setError("Please upload at least one digital file.");
      return;
    }

    try {
      setLoading(true);

      await onSubmit({
        title: title.trim(),
        shortDescription: shortDescription.trim(),
        description: description.trim(),
        category,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        price: Number(price),
        status,
        image,
        files,
      });

      setSuccess("Product created successfully!");
      setTitle("");
      setShortDescription("");
      setDescription("");
      setCategory("");
      setTags("");
      setPrice("");
      setStatus("draft");
      setImage(null);
      setFiles([]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Add New Product
        </h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Create and publish your digital product.
        </p>
      </div>

      {success && (
        <div className="rounded-lg bg-sky-50 px-4 py-3 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
          {success}
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-100 px-4 py-3 text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block font-medium">Product Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="React Admin Dashboard"
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Short Description</label>
        <textarea
          rows={2}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Full Description</label>
        <textarea
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={fieldClass}
          >
            <option value="">Select Category</option>
            {[
              "Ebooks",
              "Templates",
              "UI Kits",
              "Website Themes",
              "Mobile Apps",
              "Graphics",
              "Icons",
              "Fonts",
              "Courses",
              "Software",
              "Plugins",
              "Source Code",
              "Other",
            ].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Price (ZAR)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">Tags</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="react, dashboard, admin"
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-3 block font-medium">Product Status</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setStatus("draft")}
            className={`rounded-lg px-5 py-2 font-semibold transition ${
              status === "draft"
                ? "bg-sky-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            }`}
          >
            Draft
          </button>
          <button
            type="button"
            onClick={() => setStatus("active")}
            className={`rounded-lg px-5 py-2 font-semibold transition ${
              status === "active"
                ? "bg-sky-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            }`}
          >
            Publish
          </button>
        </div>
      </div>

      <div className="space-y-6 border-t border-slate-200 pt-6 dark:border-slate-700">
        <ImageUploader value={image} onChange={setImage} />
        <FileUploader value={files} onChange={setFiles} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-sky-500 py-3 font-bold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Saving Product..." : "Save Product"}
      </button>
    </form>
  );
};

export default ProductForm;