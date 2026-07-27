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

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          No Products Yet
        </h2>

        <p className="text-gray-500 dark:text-gray-400">
          Your products will appear here after you publish your first
          digital product.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-gray-800">

            <tr>

              <th className="text-left px-6 py-4">Image</th>

              <th className="text-left px-6 py-4">Product</th>

              <th className="text-left px-6 py-4">Category</th>

              <th className="text-left px-6 py-4">Price</th>

              <th className="text-left px-6 py-4">Status</th>

              <th className="text-left px-6 py-4">Created</th>

              <th className="text-center px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >

                <td className="px-6 py-4">

                  {product.image_url ? (

                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                  ) : (

                    <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                      No Image
                    </div>

                  )}

                </td>

                <td className="px-6 py-4 font-semibold">
                  {product.title}
                </td>

                <td className="px-6 py-4">
                  {product.category || "-"}
                </td>

                <td className="px-6 py-4">
                  ${Number(product.price).toFixed(2)}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === "active"
                        ? "bg-green-100 text-green-700"
                        : product.status === "draft"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {product.status}
                  </span>

                </td>

                <td className="px-6 py-4">
                  {new Date(product.created_at).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit(product)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => onDelete(product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-5 h-5" />
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