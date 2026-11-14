import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type ProductFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

const controlClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-sky-900/40";

const ProductFilters: React.FC<ProductFiltersProps> = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  sort,
  setSort,
}) => {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
        Filter Products
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${controlClass} pl-10`}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={controlClass}
        >
          <option value="">All Categories</option>
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

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={controlClass}
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={controlClass}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="title">Title (A–Z)</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;