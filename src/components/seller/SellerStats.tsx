
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import {
  CubeIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

type Stats = {
  totalProducts: number;
  activeProducts: number;
  earnings: number;
  downloads: number;
};

type Product = {
  id: string;
};

type OrderItem = {
  price: number | string | null;
  quantity: number | string | null;
};

const initialStats: Stats = {
  totalProducts: 0,
  activeProducts: 0,
  earnings: 0,
  downloads: 0,
};

const SellerStats: React.FC = () => {
  const [stats, setStats] = useState<Stats>(initialStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadStats = async () => {
      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw new Error(userError.message);

        if (!user) {
          throw new Error(
            "You must be logged in to view seller statistics."
          );
        }

        const {
          count: totalProducts,
          error: totalProductsError,
        } = await supabase
          .from("products")
          .select("id", { count: "exact", head: true })
          .eq("seller_id", user.id);

        if (totalProductsError) {
          throw new Error(totalProductsError.message);
        }

        const {
          count: activeProducts,
          error: activeProductsError,
        } = await supabase
          .from("products")
          .select("id", { count: "exact", head: true })
          .eq("seller_id", user.id)
          .eq("status", "active");

        if (activeProductsError) {
          throw new Error(activeProductsError.message);
        }

        const { data: products, error: productsError } = await supabase
          .from("products")
          .select("id")
          .eq("seller_id", user.id);

        if (productsError) throw new Error(productsError.message);

        const productRows = (products ?? []) as Product[];

        const productIds = productRows
          .map((product) => product.id)
          .filter(
            (id): id is string =>
              typeof id === "string" && id.trim().length > 0
          );

        let earnings = 0;

        if (productIds.length > 0) {
          const {
            data: orderItems,
            error: orderItemsError,
          } = await supabase
            .from("order_items")
            .select("price, quantity")
            .in("product_id", productIds);

          if (orderItemsError) {
            throw new Error(orderItemsError.message);
          }

          const items = (orderItems ?? []) as OrderItem[];

          earnings = items.reduce((total, item) => {
            const price = Number(item.price ?? 0);
            const quantity = Number(item.quantity ?? 0);

            if (
              !Number.isFinite(price) ||
              !Number.isFinite(quantity)
            ) {
              return total;
            }

            return total + price * quantity;
          }, 0);
        }

        // Downloads are not connected to a database table yet.
        const downloads = 0;

        if (!isMounted) return;

        setStats({
          totalProducts: totalProducts ?? 0,
          activeProducts: activeProducts ?? 0,
          earnings,
          downloads,
        });
      } catch (err) {
        console.error("Seller stats error:", err);

        if (!isMounted) return;

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load seller statistics."
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section
        aria-label="Loading seller statistics"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div className="h-3 w-20 animate-pulse rounded bg-sky-100 dark:bg-slate-800" />
                <div className="h-8 w-24 animate-pulse rounded bg-sky-100 dark:bg-slate-800" />
                <div className="h-3 w-28 animate-pulse rounded bg-sky-100 dark:bg-slate-800" />
              </div>

              <div className="h-11 w-11 animate-pulse rounded-xl bg-sky-100 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <section
        role="alert"
        className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-950/30"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
            <ExclamationTriangleIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <h2 className="font-semibold text-red-800 dark:text-red-300">
              Unable to load statistics
            </h2>

            <p className="mt-1 text-sm text-red-700 dark:text-red-400">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const formattedEarnings = stats.earnings.toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const cards = [
    {
      title: "Products",
      value: stats.totalProducts.toLocaleString("en-ZA"),
      description: "Total listings",
      icon: CubeIcon,
    },
    {
      title: "Active",
      value: stats.activeProducts.toLocaleString("en-ZA"),
      description: "Currently listed",
      icon: CheckCircleIcon,
    },
    {
      title: "Earnings",
      value: `R${formattedEarnings}`,
      description: "Product sales",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Downloads",
      value: stats.downloads.toLocaleString("en-ZA"),
      description: "Digital downloads",
      icon: ArrowDownTrayIcon,
    },
  ];

  return (
    <section
      aria-label="Seller statistics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>

                <p className="mt-2 truncate text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {card.value}
                </p>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                  {card.description}
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SellerStats;

