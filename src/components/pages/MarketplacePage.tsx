
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  seller: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Minimal Notion Business Template",
    seller: "Studio North",
    price: 299,
    category: "Templates",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&auto=format&fit=crop&q=80",
    description:
      "A polished workspace for managing clients, content, and projects in one place.",
  },
  {
    id: 2,
    title: "AI-Powered E-commerce Icon Pack",
    seller: "PixelForge",
    price: 189,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80",
    description:
      "Modern digital icons built for product pages, ads, and brand visuals.",
  },
  {
    id: 3,
    title: "SaaS Dashboard UI Kit",
    seller: "DesignFlow",
    price: 450,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop&q=80",
    description:
      "An editable Figma UI kit for founders, agencies, and product teams.",
  },
  {
    id: 4,
    title: "Digital Planner 2026 Pack",
    seller: "Plan & Grow",
    price: 129,
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=900&auto=format&fit=crop&q=80",
    description:
      "Organize your goals, schedule, and daily action plans with a clean layout.",
  },
  {
    id: 5,
    title: "Etsy Shop SEO Toolkit",
    seller: "SellerBoost",
    price: 349,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    description:
      "A step-by-step guide and toolkit to improve your online visibility.",
  },
  {
    id: 6,
    title: "1000+ ChatGPT Prompts for Creators",
    seller: "CreatorLab",
    price: 219,
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80",
    description:
      "Curated prompt ideas to help with content, support, and creative work.",
  },
  {
    id: 7,
    title: "Social Media Content Calendar",
    seller: "LaunchDay",
    price: 199,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
    description:
      "Plan campaigns, track launches, and organize your marketing schedule.",
  },
  {
    id: 8,
    title: "Brand Identity Starter Kit",
    seller: "Northleaf Studio",
    price: 399,
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80",
    description:
      "A starter brand kit for logos, colour systems, and social templates.",
  },
];

const categories = [
  "All",
  "Templates",
  "Design",
  "Marketing",
  "AI",
  "Productivity",
  "Branding",
];

const MarketplacePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch =
        query.length === 0 ||
        product.title.toLowerCase().includes(query) ||
        product.seller.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "price-low") {
        return a.price - b.price;
      }

      if (sortBy === "price-high") {
        return b.price - a.price;
      }

      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }

      return a.id - b.id;
    });
  }, [activeCategory, search, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setSortBy("popular");
  };

  return (
    <>
      <Helmet>
        <title>Shop Digital Products | Boostify Marketplace</title>
        <meta
          name="description"
          content="Browse digital products, templates, design resources, AI tools and productivity products on the Boostify Marketplace."
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <main className="min-h-screen bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

        {/* MARKETPLACE CONTENT */}
        <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">

          {/* PAGE TITLE */}
          <section className="border-b border-slate-200 pb-7 dark:border-slate-800">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                  BOOSTIFY MARKETPLACE
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Discover products
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                  Browse digital products, templates, creative resources and
                  tools from independent sellers.
                </p>
              </div>

              <Link
                to="/register"
                className="inline-flex items-center justify-center self-start rounded-lg bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-600 sm:self-auto"
              >
                Become a Seller
              </Link>

            </div>
          </section>

          {/* SEARCH AND SORT */}
          <section className="mt-7">

            <div className="flex flex-col gap-3 md:flex-row">

              <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-sky-950">

                <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products, categories or sellers..."
                  aria-label="Search marketplace products"
                  className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="shrink-0 text-sm font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">

                <label
                  htmlFor="marketplace-sort"
                  className="shrink-0 text-sm font-semibold text-slate-600 dark:text-slate-300"
                >
                  Sort by
                </label>

                <select
                  id="marketplace-sort"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white sm:w-52"
                >
                  <option value="popular">Featured</option>
                  <option value="name">Product name</option>
                  <option value="price-low">Price: Low to high</option>
                  <option value="price-high">Price: High to low</option>
                </select>

              </div>
            </div>
          </section>

          {/* CATEGORY FILTERS */}
          <section className="mt-7">

            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Shop by category
              </h2>

              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-sky-600 transition hover:text-sky-700 dark:text-sky-400"
              >
                Clear filters
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition sm:text-sm ${
                    activeCategory === category
                      ? "border-sky-500 bg-sky-500 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>
          </section>

          {/* PRODUCT CATALOGUE */}
          <section className="mt-9">

            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
                  {activeCategory === "All"
                    ? "All Products"
                    : activeCategory}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {visibleProducts.length}{" "}
                  {visibleProducts.length === 1 ? "product" : "products"} found
                </p>
              </div>

            </div>

            {visibleProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {visibleProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-800"
                  >

                    <Link
                      to={`/product/${product.id}`}
                      aria-label={`View ${product.title}`}
                      className="block"
                    >

                      {/* PRODUCT IMAGE */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">

                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-sky-700 shadow-sm">
                          {product.category}
                        </span>

                      </div>

                      {/* PRODUCT INFORMATION */}
                      <div className="p-4">

                        <h3 className="min-h-[3rem] text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                          {product.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm leading-5 text-slate-500 dark:text-slate-400">
                          {product.description}
                        </p>

                        <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">

                          <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                            Sold by{" "}
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {product.seller}
                            </span>
                          </p>

                          <div className="mt-3 flex items-center justify-between gap-2">

                            <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                              R{product.price.toLocaleString("en-ZA")}
                            </p>

                            <span className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2.5 text-xs font-bold text-white transition group-hover:bg-sky-600">
                              View Product →
                            </span>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}

              </div>
            ) : (
              /* EMPTY SEARCH RESULTS */
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-16 text-center dark:border-slate-700 dark:bg-slate-900">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-3xl dark:bg-sky-950">
                  🔎
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  No products found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                  We couldn't find products matching your search. Try another
                  keyword or choose a different category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-lg bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
                >
                  Show All Products
                </button>

              </div>
            )}

          </section>

          {/* SELLER INVITATION */}
          <section className="mt-16 border-t border-slate-200 pt-10 dark:border-slate-800">

            <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-sky-50 p-6 dark:bg-slate-900 sm:flex-row sm:items-center sm:p-8">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  SELL ON BOOSTIFY
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
                  Have products to sell?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Create a seller account and explore the opportunity to list
                  your digital products on Boostify.
                </p>
              </div>

              <Link
                to="/register"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-600"
              >
                Become a Seller →
              </Link>

            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default MarketplacePage;


