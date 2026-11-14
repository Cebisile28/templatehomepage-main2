import React from "react";

const Reviews: React.FC = () => {
  // This is sample display data, not yet connected to Supabase.
  const reviews: {
    id: number;
    customer: string;
    product: string;
    rating: number;
    comment: string;
    date: string;
  }[] = [];

  const stats = [
    { label: "Average Rating", value: "0.0" },
    { label: "Total Reviews", value: "0" },
    { label: "5 Star Reviews", value: "0" },
    { label: "Response Rate", value: "0%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Reviews
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Manage customer feedback and product ratings.
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
        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Customer Reviews
        </h2>

        {reviews.length === 0 ? (
          <div className="py-10 text-center text-slate-500 dark:text-slate-400">
            <p className="font-medium">No reviews yet.</p>
            <p className="mt-2 text-sm">
              Customer feedback will appear here when buyers review your
              products.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800"
              >
                <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {review.customer}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {review.product}
                    </p>
                  </div>

                  <div
                    className="font-semibold text-sky-600 dark:text-sky-400"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {"★".repeat(review.rating)}
                    <span className="text-slate-300">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  {review.comment}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {review.date}
                  </span>
                  <button
                    type="button"
                    disabled
                    title="Reply functionality has not been connected yet"
                    className="cursor-not-allowed text-sky-600 opacity-60 dark:text-sky-400"
                  >
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Reviews;