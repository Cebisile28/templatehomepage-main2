import React, { useMemo, useState } from "react";

type Customer = {
  id: number;
  name: string;
  email: string;
  orders: number;
  spent: string;
  status: string;
};

const Customers: React.FC = () => {
  // Placeholder until customer information is connected to Supabase.
  const customers: Customer[] = [];
  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(
    () =>
      customers.filter((customer) =>
        `${customer.name} ${customer.email}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [customers, search]
  );

  const stats = [
    { label: "Total Customers", value: "0" },
    { label: "New Customers", value: "0" },
    { label: "Returning Customers", value: "0" },
    { label: "Customer Revenue", value: "R0.00" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Customers
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Manage your customers and track customer activity.
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
          placeholder="Search customers..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-sky-900/40"
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Customer List
        </h2>

        {filteredCustomers.length === 0 ? (
          <div className="py-10 text-center text-slate-500 dark:text-slate-400">
            <p className="font-medium">No customers yet.</p>
            <p className="mt-2 text-sm">
              Your customers will appear here after purchases.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {["Customer", "Email", "Orders", "Spent", "Status", "Actions"].map(
                    (heading) => (
                      <th key={heading} className="whitespace-nowrap p-3">
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-slate-100 dark:border-slate-800"
                  >
                    <td className="p-3 font-medium text-slate-900 dark:text-white">
                      {customer.name}
                    </td>
                    <td className="p-3 text-slate-500 dark:text-slate-400">
                      {customer.email}
                    </td>
                    <td className="p-3 text-slate-900 dark:text-white">
                      {customer.orders}
                    </td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">
                      {customer.spent}
                    </td>
                    <td className="p-3">
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                        {customer.status}
                      </span>
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

export default Customers;