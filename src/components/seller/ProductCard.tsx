import React from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export type ProductCardData = {
  id: string;
  title: string;
  short_description?: string | null;
  category?: string | null;
  price: number;
  image_url?: string | null;
  status: "draft" | "active" | "archived";
};

type ProductCardProps = {
  product: ProductCardData;
  onEdit: (product: ProductCardData) => void;
  onDelete: (id: string) => void;
  onView?: (id: string) => void;
};

const badgeClasses: Record<ProductCardData["status"], string> = {
  active:
    "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  draft:
    "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
  archived:
    "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-52 bg-slate-100 dark:bg-slate-800">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            No Image
          </div>
        )}

        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold capitalize ${badgeClasses[product.status]}`}
        >
          {product.status}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
          {product.category || "Uncategorized"}
        </p>

        <h3 className="mt-2 line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
          {product.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-slate-500 dark:text-slate-400">
          {product.short_description || "No description available."}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            R{Number(product.price).toFixed(2)}
          </span>

          <div className="flex gap-2">
            {onView && (
              <button
                type="button"
                onClick={() => onView(product.id)}
                aria-label="View product"
                className="rounded-lg bg-slate-100 p-2 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <EyeIcon className="h-5 w-5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => onEdit(product)}
              aria-label="Edit product"
              className="rounded-lg bg-sky-100 p-2 text-sky-700 transition hover:bg-sky-200 dark:bg-sky-900/40 dark:text-sky-300 dark:hover:bg-sky-900/70"
            >
              <PencilSquareIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => onDelete(product.id)}
              aria-label="Delete product"
              className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/70"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;