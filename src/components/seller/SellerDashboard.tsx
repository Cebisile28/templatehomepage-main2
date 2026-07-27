import React from "react";
import { Link } from "react-router-dom";

import SellerHeader from "./SellerHeader";
import SellerStats from "./SellerStats";

const SellerDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <SellerHeader />
      <SellerStats />

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/seller/products/create"
            className="rounded-xl bg-amber-400 p-4 text-center font-semibold text-black transition hover:bg-amber-500"
          >
            + Create Product
          </Link>

          <Link
            to="/seller/products"
            className="rounded-xl bg-gray-100 p-4 text-center font-semibold transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Manage Products
          </Link>

          <Link
            to="/seller/orders"
            className="rounded-xl bg-gray-100 p-4 text-center font-semibold transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            View Orders
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Revenue Overview
        </h2>

        <div className="flex h-64 items-center justify-center rounded-xl bg-gray-100 text-gray-500 dark:bg-gray-800">
          Revenue chart will appear here
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Recent Products
        </h2>

        <div className="text-gray-500 dark:text-gray-400">
          Your latest products will appear here.
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Recent Orders
        </h2>

        <div className="text-gray-500 dark:text-gray-400">
          Your customer orders will appear here.
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Notifications
        </h2>

        <div className="text-gray-500 dark:text-gray-400">
          No new notifications.
        </div>
      </section>
    </div>
  );
};

export default SellerDashboard;
