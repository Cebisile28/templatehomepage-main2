import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  seller: string;
  price: number;
  rating: number;
  category: string;
  badge: string | null;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Minimal Notion Business Template",
    seller: "Studio North",
    price: 299,
    rating: 4.8,
    category: "Templates",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&auto=format&fit=crop&q=80",
    description: "A polished workspace for managing clients, content, and projects in one place.",
  },
  {
    id: 2,
    title: "AI-Powered E-commerce Icon Pack",
    seller: "PixelForge",
    price: 189,
    rating: 4.9,
    category: "Design",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80",
    description: "Modern digital icons built for product pages, ads, and brand visuals.",
  },
  {
    id: 3,
    title: "SaaS Dashboard UI Kit",
    seller: "DesignFlow",
    price: 450,
    rating: 4.7,
    category: "Design",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop&q=80",
    description: "An editable Figma UI kit for founders, agencies, and product teams.",
  },
  {
    id: 4,
    title: "Digital Planner 2026 Pack",
    seller: "Plan & Grow",
    price: 129,
    rating: 4.9,
    category: "Productivity",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=900&auto=format&fit=crop&q=80",
    description: "Organize your goals, schedule, and daily action plans with a clean layout.",
  },
  {
    id: 5,
    title: "Etsy Shop SEO Toolkit",
    seller: "SellerBoost",
    price: 349,
    rating: 4.8,
    category: "Marketing",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    description: "A step-by-step guide and automation suite to improve your online visibility.",
  },
  {
    id: 6,
    title: "1000+ ChatGPT Prompts for Creators",
    seller: "CreatorLab",
    price: 219,
    rating: 4.6,
    category: "AI",
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80",
    description: "Curated prompt ideas to accelerate content, support, and client delivery.",
  },
  {
    id: 7,
    title: "Social Media Content Calendar",
    seller: "LaunchDay",
    price: 199,
    rating: 4.7,
    category: "Marketing",
    badge: "Featured",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
    description: "Plan campaigns, track launches, and keep your marketing pipeline organized.",
  },
  {
    id: 8,
    title: "Brand Identity Starter Kit",
    seller: "Northleaf Studio",
    price: 399,
    rating: 4.9,
    category: "Branding",
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80",
    description: "A creator-ready brand kit for logos, color systems, and social templates.",
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

const sellerHighlights = [
  { name: "Studio North", sales: "4.8k sales", tag: "Verified seller" },
  { name: "DesignFlow", sales: "3.2k sales", tag: "Top rated" },
  { name: "CreatorLab", sales: "2.9k sales", tag: "Fast delivery" },
];

const MarketplacePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        query.length === 0 ||
        product.title.toLowerCase().includes(query) ||
        product.seller.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "price-low") {
        return a.price - b.price;
      }

      if (sortBy === "price-high") {
        return b.price - a.price;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return b.rating * 100 - a.rating * 100;
    });
  }, [activeCategory, search, sortBy]);

  return (
    <>
      <Helmet>
        <title>Marketplace | Boostify</title>
        <meta
          name="description"
          content="Browse digital products, templates, AI tools, and creative resources in the Boostify marketplace."
        />
      </Helmet>

      <main className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 p-6 shadow-[0_18px_50px_rgba(251,191,36,0.25)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-800/80">
                  Discover and grow
                </p>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Find tools, templates, and digital products you can trust.
                </h1>
              </div>

              <div className="grid min-w-[240px] gap-3 sm:grid-cols-3 lg:w-[360px] lg:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-3 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Products</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">2.4k</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Sellers</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">680</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Ratings</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">4.9</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
                <span className="text-2xl">⌕</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products, sellers or keywords"
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm focus:outline-none"
              >
                <option value="popular">Popular</option>
                <option value="rating">Top rated</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
              </select>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                    activeCategory === category
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                      : "bg-white/75 text-slate-700 hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                    Marketplace
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                    {visibleProducts.length} curated picks
                  </h2>
                </div>
              </div>

              {visibleProducts.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleProducts.map((product) => (
                    <article
                      key={product.id}
                      className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >
                      <Link to={`/product/${product.id}`}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          {product.badge && (
                            <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-950">
                              {product.badge}
                            </span>
                          )}
                        </div>

                        <div className="p-4">
                          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                            <span>{product.category}</span>
                            <span className="text-amber-600">★ {product.rating}</span>
                          </div>

                          <h3 className="mt-3 line-clamp-2 text-lg font-black text-slate-900 dark:text-white">
                            {product.title}
                          </h3>

                          <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                            {product.description}
                          </p>

                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                                {product.seller}
                              </p>
                              <p className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                                R{product.price}
                              </p>
                            </div>

                            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-amber-700">
                              View
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-[24px] border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-lg font-bold text-slate-900 dark:text-white">No products match your search.</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Try a different keyword or switch to another category.
                  </p>
                </div>
              )}
            </section>

            <aside className="space-y-6">
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">Trusted sellers</p>
                <div className="mt-4 space-y-3">
                  {sellerHighlights.map((seller) => (
                    <div
                      key={seller.name}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 dark:bg-slate-800"
                    >
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{seller.name}</p>
                        <p className="text-xs text-slate-500">{seller.sales}</p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-emerald-700">
                        {seller.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-900 p-5 text-white shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">Why buyers choose us</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>• Curated digital products from verified creators</li>
                  <li>• Secure checkout and trusted seller reviews</li>
                  <li>• Fast delivery and easy buyer support</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default MarketplacePage;

