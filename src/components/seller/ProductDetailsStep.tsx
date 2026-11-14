
import React from "react";
import { ProductFormData } from "./CreateProduct";

type ProductDetailsStepProps = {
  product: ProductFormData;
  updateProduct: (data: Partial<ProductFormData>) => void;
};

const categories = [
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
];

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-900/40";

const labelClasses =
  "mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200";

const ProductDetailsStep: React.FC<ProductDetailsStepProps> = ({
  product,
  updateProduct,
}) => {
  return (
    <div className="space-y-7">
      {/* HEADING */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Product Details
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Tell buyers what your digital product is about.
        </p>
      </div>

      {/* TITLE */}
      <div>
        <label className={labelClasses} htmlFor="product-title">
          Product Title *
        </label>

        <input
          id="product-title"
          type="text"
          value={product.title}
          onChange={(e) =>
            updateProduct({
              title: e.target.value,
            })
          }
          placeholder="Example: Modern Website Template"
          className={inputClasses}
          required
        />
      </div>

      {/* SHORT DESCRIPTION */}
      <div>
        <label
          className={labelClasses}
          htmlFor="product-short-description"
        >
          Short Description *
        </label>

        <input
          id="product-short-description"
          type="text"
          value={product.short_description}
          onChange={(e) =>
            updateProduct({
              short_description: e.target.value,
            })
          }
          placeholder="A short summary buyers will see"
          className={inputClasses}
          required
        />
      </div>

      {/* FULL DESCRIPTION */}
      <div>
        <label
          className={labelClasses}
          htmlFor="product-description"
        >
          Full Description
        </label>

        <textarea
          id="product-description"
          rows={6}
          value={product.description}
          onChange={(e) =>
            updateProduct({
              description: e.target.value,
            })
          }
          placeholder="Explain your product, its features, benefits and what buyers will receive..."
          className={`${inputClasses} resize-y`}
        />

        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Give buyers enough information to understand what they are
          purchasing.
        </p>
      </div>

      {/* CATEGORY */}
      <div>
        <label className={labelClasses} htmlFor="product-category">
          Category *
        </label>

        <select
          id="product-category"
          value={product.category}
          onChange={(e) =>
            updateProduct({
              category: e.target.value,
            })
          }
          className={inputClasses}
          required
        >
          <option value="">Select category</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* TAGS */}
      <div>
        <label className={labelClasses} htmlFor="product-tags">
          Tags
        </label>

        <input
          id="product-tags"
          type="text"
          placeholder="design, website, template"
          value={(product.tags ?? []).join(", ")}
          onChange={(e) => {
            const tags = e.target.value
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean);

            updateProduct({ tags });
          }}
          className={inputClasses}
        />

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Separate tags using commas to help buyers discover your product.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsStep;
