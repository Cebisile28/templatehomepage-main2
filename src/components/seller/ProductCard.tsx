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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
  onView,
}) => {
  const badgeClasses = {
    active: "bg-green-100 text-green-700",
    draft: "bg-yellow-100 text-yellow-700",
    archived: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition">

      {/* Product Image */}

      <div className="relative h-52 bg-gray-100 dark:bg-gray-800">

        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image
          </div>
        )}

        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${badgeClasses[product.status]}`}
        >
          {product.status}
        </span>
      </div>

      {/* Content */}

      <div className="p-5">

        <p className="text-xs uppercase tracking-wide text-amber-500 font-semibold">
          {product.category || "Uncategorized"}
        </p>

        <h3 className="text-xl font-bold mt-2 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm line-clamp-3">
          {product.short_description || "No description available."}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-2xl font-bold text-amber-500">
            ${Number(product.price).toFixed(2)}
          </span>

          <div className="flex gap-2">

            {onView && (
              <button
                onClick={() => onView(product.id)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                title="View"
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={() => onEdit(product)}
              className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
              title="Edit"
            >
              <PencilSquareIcon className="w-5 h-5 text-blue-600" />
            </button>

            <button
              onClick={() => onDelete(product.id)}
              className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition"
              title="Delete"
            >
              <TrashIcon className="w-5 h-5 text-red-600" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;