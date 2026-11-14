import React from "react";

const Analytics: React.FC = () => {
  const stats = [
    { label: "Total Revenue", value: "R0.00" },
    { label: "Products Sold", value: "0" },
    { label: "Customers", value: "0" },
    { label: "Orders", value: "0" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Seller Analytics
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Track your store performance, sales, and customer growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-sky-600 dark:text-sky-400">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Sales Overview
        </h2>

        <div className="flex h-72 flex-col items-center justify-center rounded-xl bg-slate-50 text-center text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <p className="font-medium">Your sales chart will appear here.</p>
          <p className="mt-2 text-sm">
            Sales data will be displayed once your orders are connected.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
          Top Performing Products
        </h2>

        <p className="text-slate-500 dark:text-slate-400">
          Your best-selling products will appear here once sales tracking is
          connected.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="text-slate-500 dark:text-slate-400">
          Your recent sales and store activity will appear here.
        </p>
      </section>
    </div>
  );
};

export default Analytics;