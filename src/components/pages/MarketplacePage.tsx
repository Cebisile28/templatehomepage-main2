import React, { useMemo, useState } from "react";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  StarIcon,
  HeartIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  seller: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  featured?: boolean;
};

const categories = [
  "All",
  "Templates",
  "Branding",
  "Marketing",
  "Business",
  "Resources",
  "AI Tools",
];

const products: Product[] = [
  {
    id: 1,
    name: "Creator Starter Kit",
    category: "Templates",
    price: 699,
    seller: "Nova Studio",
    rating: 4.9,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    badge: "Best seller",
    featured: true,
  },
  {
    id: 2,
    name: "Brand Launch Pack",
    category: "Branding",
    price: 899,
    seller: "Pixel & Pine",
    rating: 4.8,
    reviews: 176,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    badge: "Hot",
  },
  {
    id: 3,
    name: "Sales Funnel Blueprint",
    category: "Marketing",
    price: 1299,
    seller: "Scale Works",
    rating: 5.0,
    reviews: 132,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    badge: "Top rated",
  },
  {
    id: 4,
    name: "Business Operations System",
    category: "Business",
    price: 1499,
    seller: "Northline Labs",
    rating: 4.7,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Growth Resource Vault",
    category: "Resources",
    price: 499,
    seller: "BluePeak Media",
    rating: 4.9,
    reviews: 305,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    badge: "Popular",
  },
  {
    id: 6,
    name: "AI Content Workflow",
    category: "AI Tools",
    price: 1799,
    seller: "Signal Foundry",
    rating: 4.8,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    badge: "New",
  },
];

const MarketplacePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch = `${product.name} ${product.seller}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.10),transparent_30%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
              className="max-w-2xl text-center lg:text-left"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                Marketplace
              </p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Discover tools, templates, and growth assets built for real momentum.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Browse curated digital products created by trusted sellers and designed to help businesses, creators, and entrepreneurs move faster.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/register"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all duration-200 hover:bg-amber-500 hover:shadow-xl"
                >
                  Sell on Boostify
                </Link>

                <Link
                  to="/services"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-200 hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  Explore services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut", delay: 0.08 }}
              className="w-full max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Marketplace snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
                    24.8k+
                  </h2>
                </div>

                <div className="rounded-2xl bg-amber-100 p-3 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                  <CheckBadgeIcon className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  { label: "Verified sellers", value: "1,240" },
                  { label: "Weekly purchases", value: "3,612" },
                  { label: "Avg. satisfaction", value: "4.9/5" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 dark:bg-slate-950">
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-xl">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products, sellers, or categories"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-300 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              Filters
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
              Curated picks
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">Find what fits your next move</h2>
          </div>

          <span className="hidden rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200 sm:inline-flex">
            {filteredProducts.length} items
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No products match your search</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Try another keyword or switch categories to discover more listings.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: index * 0.04, ease: "easeOut" }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    {product.badge && (
                      <span className="rounded-full bg-amber-400/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-950">
                        {product.badge}
                      </span>
                    )}

                    <button
                      type="button"
                      aria-label={`Save ${product.name}`}
                      className="rounded-full bg-white/90 p-2 text-slate-700 shadow-sm transition-colors hover:text-amber-600"
                    >
                      <HeartIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {product.category}
                    </span>

                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{product.reviews} reviews</span>
                  </div>

                  <div>
                    <Link to={`/product/${product.id}`} className="block text-xl font-bold text-slate-900 transition-colors hover:text-amber-600 dark:text-white dark:hover:text-amber-400">
                      {product.name}
                    </Link>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">by {product.seller}</p>
                  </div>

                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        className={`h-4 w-4 ${
                          starIndex < Math.round(product.rating)
                            ? "fill-current"
                            : "text-slate-300 dark:text-slate-600"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Price</p>
                      <p className="text-2xl font-extrabold text-slate-900 dark:text-white">R{product.price}</p>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-500 hover:text-slate-950 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-500"
                    >
                      View
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">Ready to grow?</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Turn your ideas into products people want to buy.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all duration-200 hover:bg-amber-500 hover:shadow-xl"
            >
              Start selling
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MarketplacePage;
