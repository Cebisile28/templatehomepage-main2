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
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 mb-6">

      <h2 className="text-xl font-bold mb-5">
        Filter Products
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">

        {/* Search */}

        <div className="relative">

          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3"
        >
          <option value="">All Categories</option>
          <option value="Ebooks">Ebooks</option>
          <option value="Templates">Templates</option>
          <option value="UI Kits">UI Kits</option>
          <option value="Website Themes">Website Themes</option>
          <option value="Mobile Apps">Mobile Apps</option>
          <option value="Graphics">Graphics</option>
          <option value="Icons">Icons</option>
          <option value="Fonts">Fonts</option>
          <option value="Courses">Courses</option>
          <option value="Software">Software</option>
          <option value="Plugins">Plugins</option>
          <option value="Source Code">Source Code</option>
          <option value="Other">Other</option>
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3"
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