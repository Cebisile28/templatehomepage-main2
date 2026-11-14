import React from "react";
import { ProductFormData } from "./CreateProduct";

type PricingStepProps = {
  product: ProductFormData;
  updateProduct: (data: Partial<ProductFormData>) => void;
};

const fieldClass =
  "w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-sky-900/40";

const PricingStep: React.FC<PricingStepProps> = ({
  product,
  updateProduct,
}) => {
  return (
    <div className="space-y-8 text-slate-800 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold">Pricing & Visibility</h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Set your product price and decide how buyers will see it.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Product Price *</label>
        <div className="relative">
          <span className="absolute left-4 top-3 text-slate-500">R</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={product.price}
            onChange={(e) => updateProduct({ price: e.target.value })}
            placeholder="299.99"
            className={`${fieldClass} pl-9`}
          />
        </div>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Set the amount buyers will pay for your product.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Product Status</label>
        <select
          value={product.status}
          onChange={(e) =>
            updateProduct({
              status: e.target.value as ProductFormData["status"],
            })
          }
          className={fieldClass}
        >
          <option value="draft">Draft</option>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
        </select>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Active products are visible to buyers.
        </p>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-slate-200 p-5 dark:border-slate-700">
        <div>
          <h3 className="font-semibold">Featured Product</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Highlight this product in the marketplace.
          </p>
        </div>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={product.featured}
            onChange={(e) =>
              updateProduct({ featured: e.target.checked })
            }
          />
          <span className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-500 peer-focus:ring-4 peer-focus:ring-sky-100 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all peer-checked:after:translate-x-full dark:bg-slate-600 dark:peer-focus:ring-sky-900/40" />
        </label>
      </div>
    </div>
  );
};

export default PricingStep;