import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  CubeIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

type Stats = {
  totalProducts: number;
  activeProducts: number;
  earnings: number;
  downloads: number;
};

const SellerStats: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    totalProducts: 0,
    activeProducts: 0,
    earnings: 0,
    downloads: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // Total products
      const { count: totalProducts } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("seller_id", user.id);

      // Active products
      const { count: activeProducts } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("seller_id", user.id)
        .eq("status", "active");

      // Temporary values until Orders are built
      const earnings = 0;
      const downloads = 0;

      setStats({
        totalProducts: totalProducts ?? 0,
        activeProducts: activeProducts ?? 0,
        earnings,
        downloads,
      });
    };

    loadStats();
  }, []);

  const cards = [
    {
      title: "Products",
      value: stats.totalProducts,
      icon: CubeIcon,
      color: "text-blue-500",
    },
    {
      title: "Active",
      value: stats.activeProducts,
      icon: CheckCircleIcon,
      color: "text-green-500",
    },
    {
      title: "Earnings",
      value: `R${stats.earnings}`,
      icon: CurrencyDollarIcon,
      color: "text-amber-500",
    },
    {
      title: "Downloads",
      value: stats.downloads,
      icon: ArrowDownTrayIcon,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-10">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {card.value}
                </h2>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
                <Icon className={`w-7 h-7 ${card.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SellerStats;