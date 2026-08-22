import React from "react";
import { Link } from "react-router-dom";

import SellerHeader from "./SellerHeader";
import SellerStats from "./SellerStats";

const SellerDashboard: React.FC = () => {
return (
<div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
<div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

    <div className="mb-6">
      <SellerHeader />
    </div>

    <div className="mb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            Seller Dashboard
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Welcome back
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            Manage your products, monitor your sales, and keep track of
            your customer orders from one place.
          </p>
        </div>

        <Link
          to="/seller/products/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition-all duration-200 hover:bg-amber-500 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-amber-400/20 active:scale-[0.98]"
        >
          <span className="text-lg leading-none">+</span>
          Create Product
        </Link>
      </div>
    </div>

    <section className="mb-8">
      <SellerStats />
    </section>

    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Common tasks you can access quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <Link
          to="/seller/products/create"
          className="group rounded-2xl border border-amber-200 bg-amber-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-amber-900/50 dark:bg-amber-500/10 dark:hover:border-amber-800"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-xl font-bold text-slate-950">
            +
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            Create Product
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Add a new product to your marketplace listings.
          </p>

          <span className="mt-4 inline-flex text-sm font-semibold text-amber-700 dark:text-amber-400">
            Add product →
          </span>
        </Link>

        <Link
          to="/seller/products"
          className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5 12 3 3.75 7.5m16.5 0v9L12 21l-8.25-4.5v-9m16.5 0L12 12 3.75 7.5M12 12v9"
              />
            </svg>
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            Manage Products
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            View, edit, update, or remove your products.
          </p>

          <span className="mt-4 inline-flex text-sm font-semibold text-blue-600 dark:text-blue-400">
            Manage products →
          </span>
        </Link>

        <Link
          to="/seller/orders"
          className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5M6 3.75h12a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 6 3.75Z"
              />
            </svg>
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            View Orders
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and manage orders from your customers.
          </p>

          <span className="mt-4 inline-flex text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            View orders →
          </span>
        </Link>

      </div>
    </section>

    <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Revenue Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Monitor your sales performance over time.
            </p>
          </div>

          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:inline-flex dark:bg-slate-800 dark:text-slate-400">
            Overview
          </span>
        </div>

        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950">
          <div className="text-center">

            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
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
                  d="M3 3v18h18M7.5 15.75l3-3 2.25 2.25 4.5-5.25"
                />
              </svg>
            </div>

            <p className="font-medium text-slate-700 dark:text-slate-300">
              Revenue chart
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
              Sales analytics will appear here.
            </p>

          </div>
        </div>
      </section>

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

          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
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
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9a6 6 0 1 0-12 0v.75a8.967 8.967 0 0 1-2.312 6.022 23.848 23.848 0 0 0 5.454 1.31m5.715 0a24.255 24.255 0 0 1-5.715 0m5.715 0a3 3 0 1 1-5.715 0"
              />
            </svg>
          </div>

          <p className="font-medium text-slate-700 dark:text-slate-300">
            No new notifications
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
            You're all caught up.
          </p>

        </div>
      </section>

    </div>

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
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all products →
        </Link>
      </div>

      <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center dark:border-slate-700 dark:bg-slate-950">

        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
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
              d="m20.25 7.5-8.25-4.5-8.25 4.5m16.5 0v9L12 21l-8.25-4.5v-9m16.5 0L12 12 3.75 7.5M12 12v9"
            />
          </svg>
        </div>

        <p className="font-medium text-slate-700 dark:text-slate-300">
          Your latest products will appear here
        </p>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
          Start by adding your first product.
        </p>

        <Link
          to="/seller/products/create"
          className="mt-4 rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-500"
        >
          Create Product
        </Link>

      </div>
    </section>

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
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all orders →
        </Link>
      </div>

      <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center dark:border-slate-700 dark:bg-slate-950">

        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
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

        <p className="font-medium text-slate-700 dark:text-slate-300">
          Your recent orders will appear here
        </p>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
          Orders from customers will be displayed here.
        </p>

        <Link
          to="/seller/orders"
          className="mt-4 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
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


