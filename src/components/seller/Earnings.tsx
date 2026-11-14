import React from "react";

const Earnings: React.FC = () => {
  const stats = [
    { label: "Total Earnings", value: "R0.00" },
    { label: "This Month", value: "R0.00" },
    { label: "Pending Payments", value: "R0.00" },
    { label: "Available Balance", value: "R0.00" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Earnings
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Track your seller revenue, payments, and transaction history.
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
            <h2 className="mt-3 text-3xl font-bold text-sky-600 dark:text-sky-400">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
          Recent Transactions
        </h2>

        <div className="rounded-lg bg-slate-50 p-6 text-center text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <p className="font-medium">No transactions yet.</p>
          <p className="mt-2 text-sm">
            Your product sales will appear here when customers make purchases.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Withdraw Funds
        </h2>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Add your payment details to receive seller payouts.
        </p>

        <button
          type="button"
          disabled
          title="Withdrawal functionality has not been connected yet"
          className="mt-5 cursor-not-allowed rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white opacity-50"
        >
          Request Withdrawal
        </button>

        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Withdrawals will become available after payment and payout
          functionality has been configured.
        </p>
      </section>
    </div>
  );
};

export default Earnings;