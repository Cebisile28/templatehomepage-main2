import React from "react";
import {
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export type SellerProduct = {
  id: string;
  title: string;
  category: string | null;
  price: number;
  status: "draft" | "active" | "archived";
  image_url: string | null;
  created_at: string;
};

type ProductTableProps = {
  products: SellerProduct[];
  onEdit: (product: SellerProduct) => void;
  onDelete: (id: string) => void;
};

const statusClasses: Record<SellerProduct["status"], string> = {
  active:
    "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  draft:
    "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
  archived:
    "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
};

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          No Products Yet
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Your products will appear here after you publish your first digital
          product.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              {["Image", "Product", "Category", "Price", "Status", "Created", "Actions"].map(
                (heading) => (
                  <th key={heading} className="whitespace-nowrap px-6 py-4 font-semibold">
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-slate-200 text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <td className="px-6 py-4">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-500 dark:bg-slate-800">
                      No Image
                    </div>
                  )}
                </td>

                <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                  {product.title}
                </td>
                <td className="px-6 py-4">{product.category || "-"}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  R{Number(product.price).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClasses[product.status]}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {new Date(product.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => onEdit(product)}
                      aria-label={`Edit ${product.title}`}
                      className="text-sky-600 transition hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(product.id)}
                      aria-label={`Delete ${product.title}`}
                      className="text-red-500 transition hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;