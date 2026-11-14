import React, { useMemo, useState } from "react";

type Order = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: string;
  date: string;
};

const Orders: React.FC = () => {
  // Placeholder until this page is connected to your Supabase orders table.
  const orders: Order[] = [];
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) =>
        `${order.id} ${order.customer} ${order.product}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [orders, search]
  );

  const stats = [
    { label: "Total Orders", value: "0" },
    { label: "Pending Orders", value: "0" },
    { label: "Completed Orders", value: "0" },
    { label: "Revenue", value: "R0.00" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Orders
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          View and manage your customer orders.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
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

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-sky-900/40"
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Customer Orders
        </h2>

        {filteredOrders.length === 0 ? (
          <div className="py-10 text-center text-slate-500 dark:text-slate-400">
            <p className="font-medium">No orders yet.</p>
            <p className="mt-2 text-sm">
              Your customer purchases will appear here when buyers place
              orders.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {[
                    "Order ID",
                    "Customer",
                    "Product",
                    "Amount",
                    "Status",
                    "Date",
                    "Actions",
                  ].map((heading) => (
                    <th key={heading} className="whitespace-nowrap p-3">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-100 dark:border-slate-800"
                  >
                    <td className="p-3 text-slate-900 dark:text-white">
                      {order.id}
                    </td>
                    <td className="p-3 text-slate-500 dark:text-slate-400">
                      {order.customer}
                    </td>
                    <td className="p-3 text-slate-900 dark:text-white">
                      {order.product}
                    </td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">
                      {order.amount}
                    </td>
                    <td className="p-3">
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 text-slate-500 dark:text-slate-400">
                      {order.date}
                    </td>
                    <td className="p-3 text-sky-600 dark:text-sky-400">
                      Not available
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Orders;