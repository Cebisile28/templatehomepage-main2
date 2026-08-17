```tsx
// src/components/seller/SellerStats.tsx

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
    let mounted = true;

    const loadStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get logged-in user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          throw new Error(userError.message);
        }

        if (!user) {
          throw new Error(
            "You must be logged in to view seller statistics."
          );
        }

        // --------------------------------------------------
        // TOTAL PRODUCTS
        // --------------------------------------------------

        const { count: totalProducts, error: totalError } =
          await supabase
            .from("products")
            .select("*", {
              count: "exact",
              head: true,
            })
            .eq("seller_id", user.id);

        if (totalError) {
          throw new Error(totalError.message);
        }

        // --------------------------------------------------
        // ACTIVE PRODUCTS
        // --------------------------------------------------

        const { count: activeProducts, error: activeError } =
          await supabase
            .from("products")
            .select("*", {
              count: "exact",
              head: true,
            })
            .eq("seller_id", user.id)
            .eq("status", "active");

        if (activeError) {
          throw new Error(activeError.message);
        }

        // --------------------------------------------------
        // GET SELLER PRODUCT IDS
        // --------------------------------------------------

        const { data: products, error: productsError } =
          await supabase
            .from("products")
            .select("id")
            .eq("seller_id", user.id);

        if (productsError) {
          throw new Error(productsError.message);
        }

        // --------------------------------------------------
        // CALCULATE EARNINGS
        // --------------------------------------------------

        let earnings = 0;

        const productIds = (products ?? [])
          .map((product) => product.id)
          .filter((id): id is string => Boolean(id));

        if (productIds.length > 0) {
          const { data: orderItems, error: orderItemsError } =
            await supabase
              .from("order_items")
              .select("price, quantity")
              .in("product_id", productIds);

          if (orderItemsError) {
            throw new Error(orderItemsError.message);
          }

          if (orderItems) {
            earnings = orderItems.reduce((total, item) => {
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
        }

        // --------------------------------------------------
        // DOWNLOADS
        // --------------------------------------------------
        // Downloads can be connected later when digital
        // download tracking is added to the database.

        const downloads = 0;

        if (mounted) {
          setStats({
            totalProducts: totalProducts ?? 0,
            activeProducts: activeProducts ?? 0,
            earnings,
            downloads,
          });
        }
      } catch (err) {
        console.error("Seller stats error:", err);

        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load seller statistics."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadStats();

    return () => {
      mounted = false;
    };
  }, []);

  // --------------------------------------------------
  // LOADING STATE
  // --------------------------------------------------

  if (loading) {
    return (
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-sm
              dark:border-gray-800
              dark:bg-gray-900
            "
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                <div className="h-8 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                <div className="h-3 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              </div>

              <div className="h-11 w-11 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        ))}
      </section>
    );
  }

  // --------------------------------------------------
  // ERROR STATE
  // --------------------------------------------------

  if (error) {
    return (
      <section
        role="alert"
        className="
          rounded-2xl
          border
          border-red-200
          bg-red-50
          p-5
          dark:border-red-900/50
          dark:bg-red-950/30
        "
      >
        <div className="flex items-start gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-red-100
              text-red-600
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <ExclamationTriangleIcon className="h-5 w-5" />
          </div>

          <div>
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

  // --------------------------------------------------
  // FORMAT VALUES
  // --------------------------------------------------

  const earnings = stats.earnings.toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // --------------------------------------------------
  // STAT CARDS
  // --------------------------------------------------

  const cards = [
    {
      title: "Products",
      value: stats.totalProducts.toLocaleString("en-ZA"),
      description: "Total listings",
      icon: CubeIcon,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBackground: "bg-blue-100 dark:bg-blue-500/10",
    },
    {
      title: "Active",
      value: stats.activeProducts.toLocaleString("en-ZA"),
      description: "Currently listed",
      icon: CheckCircleIcon,
      iconColor: "text-green-600 dark:text-green-400",
      iconBackground: "bg-green-100 dark:bg-green-500/10",
    },
    {
      title: "Earnings",
      value: `R${earnings}`,
      description: "Product sales",
      icon: CurrencyDollarIcon,
      iconColor: "text-amber-600 dark:text-amber-400",
      iconBackground: "bg-amber-100 dark:bg-amber-500/10",
    },
    {
      title: "Downloads",
      value: stats.downloads.toLocaleString("en-ZA"),
      description: "Digital downloads",
      icon: ArrowDownTrayIcon,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBackground: "bg-purple-100 dark:bg-purple-500/10",
    },
  ];

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------

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
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-md
              dark:border-gray-800
              dark:bg-gray-900
              dark:hover:border-gray-700
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {card.title}
                </p>

                <p className="mt-2 truncate text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                  {card.value}
                </p>

                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  {card.description}
                </p>
              </div>

              <div
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${card.iconBackground}
                `}
              >
                <Icon
                  className={`h-6 w-6 ${card.iconColor}`}
                  aria-hidden="true"
                />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SellerStats;
```


