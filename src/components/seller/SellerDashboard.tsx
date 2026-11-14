
import React from "react";
import { Link } from "react-router-dom";

import SellerHeader from "./SellerHeader";
import SellerStats from "./SellerStats";

const SellerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* SELLER HEADER */}
        <div className="mb-6">
          <SellerHeader />
        </div>

        {/* SELLER STATISTICS */}
        <section className="mb-8">
          <SellerStats />
        </section>

        {/* QUICK ACTIONS */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Common tasks you can access quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* CREATE PRODUCT */}
            <Link
              to="/seller/products/create"
              className="group rounded-2xl border border-sky-200 bg-sky-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md dark:border-sky-900 dark:bg-sky-950/30 dark:hover:border-sky-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-2xl font-bold text-white">
                +
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white">
                Create Product
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Add a new product to your marketplace listings.
              </p>

              <span className="mt-4 inline-flex text-sm font-bold text-sky-600 dark:text-sky-400">
                Add product →
              </span>
            </Link>

            {/* MANAGE PRODUCTS */}
            <Link
              to="/seller/products"
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5 12 3 3.75 7.5m16.5 0v9L12 21l-8.25-4.5v-9m16.5 0L12 12 3.75 7.5M12 12v9"
                  />
                </svg>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white">
                Manage Products
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                View, edit, update, or remove your products.
              </p>

              <span className="mt-4 inline-flex text-sm font-bold text-sky-600 dark:text-sky-400">
                Manage products →
              </span>
            </Link>

            {/* VIEW ORDERS */}
            <Link
              to="/seller/orders"
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M6 3.75h12a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 6 3.75Z"
                  />
                </svg>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white">
                View Orders
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Track and manage orders from your customers.
              </p>

              <span className="mt-4 inline-flex text-sm font-bold text-sky-600 dark:text-sky-400">
                View orders →
              </span>
            </Link>

          </div>
        </section>

        {/* REVENUE AND NOTIFICATIONS */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* REVENUE OVERVIEW */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Revenue Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Monitor your sales performance over time.
              </p>
            </div>

            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950">

              <div className="text-center">

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v18h18M7.5 15.75l3-3 2.25 2.25 4.5-5.25"
                    />
                  </svg>
                </div>

                <p className="font-semibold text-slate-800 dark:text-white">
                  Revenue chart
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Sales analytics will appear here.
                </p>

              </div>
            </div>
          </section>

          {/* NOTIFICATIONS */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Important updates about your store.
              </p>
            </div>

            <div className="flex min-h-[200px] flex-col items-center justify-center text-center">

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9a6 6 0 1 0-12 0v.75a8.967 8.967 0 0 1-2.312 6.022 23.848 23.848 0 0 0 5.454 1.31m5.715 0a24.255 24.255 0 0 1-5.715 0m5.715 0a3 3 0 1 1-5.715 0"
                  />
                </svg>
              </div>

              <p className="font-semibold text-slate-800 dark:text-white">
                No new notifications
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                You're all caught up.
              </p>

            </div>
          </section>

        </div>

        {/* RECENT PRODUCTS */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Recent Products
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Your latest product listings.
              </p>
            </div>

            <Link
              to="/seller/products"
              className="text-sm font-bold text-sky-600 transition hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              View all products →
            </Link>

          </div>

          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center dark:border-slate-700 dark:bg-slate-950">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-8.25-4.5-8.25 4.5m16.5 0v9L12 21l-8.25-4.5v-9m16.5 0L12 12 3.75 7.5M12 12v9"
                />
              </svg>
            </div>

            <p className="font-semibold text-slate-800 dark:text-white">
              Your latest products will appear here
            </p>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Start by adding your first product.
            </p>

            <Link
              to="/seller/products/create"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
            >
              Create Product
            </Link>

          </div>
        </section>

        {/* RECENT ORDERS */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Keep track of your latest customer orders.
              </p>
            </div>

            <Link
              to="/seller/orders"
              className="text-sm font-bold text-sky-600 transition hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              View all orders →
            </Link>

          </div>

          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center dark:border-slate-700 dark:bg-slate-950">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.5h16.5M6 3.75h12a1.5 1.5 0 0 1 1.5 1.5v13.5A1.5 1.5 0 0 1 18 20.25H6a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 6 3.75Z"
                />
              </svg>
            </div>

            <p className="font-semibold text-slate-800 dark:text-white">
              Your recent orders will appear here
            </p>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Orders from customers will be displayed here.
            </p>

            <Link
              to="/seller/orders"
              className="mt-5 inline-flex items-center justify-center rounded-xl border border-sky-500 bg-white px-5 py-2.5 text-sm font-bold text-sky-600 transition hover:bg-sky-50 dark:bg-slate-900 dark:text-sky-400 dark:hover:bg-slate-800"
            >
              View Orders
            </Link>

          </div>
        </section>

      </div>
    </div>
  );
};

export default SellerDashboard;






