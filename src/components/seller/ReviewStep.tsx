import React from "react";
import { ProductFormData } from "./CreateProduct";

type ReviewStepProps = {
  product: ProductFormData;
};

const ReviewStep: React.FC<ReviewStepProps> = ({ product }) => {
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const imagePreview = product.image
    ? URL.createObjectURL(product.image)
    : null;

  React.useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  return (
    <div className="space-y-8 text-slate-800 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold">Review Product</h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Check everything before publishing your product.
        </p>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">Product Image</h3>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt={product.title || "Product preview"}
            className="h-60 w-full max-w-sm rounded-xl border border-slate-200 object-cover dark:border-slate-700"
          />
        ) : (
          <div className="flex h-60 w-full max-w-sm items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            No Image Selected
          </div>
        )}
      </div>

      <section className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-xl font-bold">Product Information</h3>

        {[
          ["Title", product.title],
          ["Category", product.category],
          ["Short Description", product.short_description],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="font-semibold">{value || "-"}</p>
          </div>
        ))}

        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Description</p>
          <p className="whitespace-pre-line">{product.description || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Tags</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags.length > 0 ? (
              product.tags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-slate-500 dark:text-slate-400">No tags</span>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-xl font-bold">Pricing</h3>
        <p>
          Price:
          <span className="ml-2 font-bold text-sky-600 dark:text-sky-400">
            R{Number(product.price || 0).toFixed(2)}
          </span>
        </p>
        <p>
          Status:
          <span className="ml-2 font-semibold capitalize">{product.status}</span>
        </p>
        <p>
          Featured:
          <span className="ml-2 font-semibold">
            {product.featured ? "Yes" : "No"}
          </span>
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-xl font-bold">Digital Files</h3>
        {product.files.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">No files uploaded.</p>
        ) : (
          <div className="space-y-3">
            {product.files.map((file, index) => (
              <div
                key={`${file.name}-${file.size}-${index}`}
                className="flex items-center justify-between rounded-lg bg-white p-4 dark:bg-slate-900"
              >
                <div className="min-w-0">
                  <p className="break-all font-medium">{file.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ReviewStep;