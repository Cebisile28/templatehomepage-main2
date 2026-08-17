// src/components/pages/MarketplacePage.tsx

import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import ProductFilters from "../seller/ProductFilters";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  seller_id: string;
  seller_verified: boolean;
  location: string | null;
  delivery_time: string | null;
  category: string | null;
  status: string | null;
  created_at: string;
};

type SupabaseProduct = {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  seller_id: string;
  location: string | null;
  delivery_time: string | null;
  category: string | null;
  status: string | null;
  created_at: string;
  profiles:
    | {
        role?: string | null;
        full_name?: string | null;
        verified?: boolean | null;
      }
    | null;
};

const MarketplacePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: supabaseError } = await supabase
          .from("products")
          .select(`
            id,
            name,
            price,
            image_url,
            seller_id,
            location,
            delivery_time,
            category,
            status,
            created_at,
            profiles (
              role,
              full_name,
              verified
            )
          `);

        if (supabaseError) {
          console.error(
            "Error fetching products:",
            supabaseError.message
          );

          setError(
            "We couldn't load the products. Please try again."
          );

          setProducts([]);
          return;
        }

        const mappedProducts: Product[] = (
          (data ?? []) as SupabaseProduct[]
        ).map((product) => ({
          id: product.id,
          name: product.name,
          price: Number(product.price) || 0,
          image_url: product.image_url,
          seller_id: product.seller_id,
          seller_verified: product.profiles?.verified ?? false,
          location: product.location,
          delivery_time: product.delivery_time,
          category: product.category,
          status: product.status,
          created_at: product.created_at,
        }));

        setProducts(mappedProducts);
      } catch (err) {
        console.error("Marketplace error:", err);
        setError(
          "Something went wrong while loading the marketplace."
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const productName = product.name.toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        productName.includes(normalizedSearch);

      const matchesCategory =
        category === "" ||
        product.category === category;

      const matchesStatus =
        status === "" ||
        product.status === status;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });

    result.sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "title") {
        return a.name.localeCompare(b.name);
      }

      if (sort === "oldest") {
        return (
          new Date(a.created_at).getTime() -
          new Date(b.created_at).getTime()
        );
      }

      return (
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
      );
    });

    return result;
  }, [
    products,
    search,
    category,
    status,
    sort,
  ]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setStatus("");
    setSort("newest");
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    category !== "" ||
    status !== "";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Marketplace
              </h1>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Discover products from trusted sellers.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setFiltersOpen((current) => !current)
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M6 12h12m-9 6h6"
                />
              </svg>

              {filtersOpen
                ? "Hide Filters"
                : "Show Filters"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <aside
            className={
              filtersOpen
                ? "block w-full shrink-0 lg:w-72"
                : "hidden w-full shrink-0 lg:block lg:w-72"
            }
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold">
                    Filters
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Find exactly what you're looking for.
                  </p>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Clear
                  </button>
                )}
              </div>

              <ProductFilters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSort={setSort}
              />
            </div>
          </aside>

          <main className="min-w-0 flex-1">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {loading ? (
                    "Loading products..."
                  ) : (
                    <>
                      {filteredProducts.length}{" "}
                      {filteredProducts.length === 1
                        ? "product found"
                        : "products found"}
                    </>
                  )}
                </p>

                {hasActiveFilters && !loading && (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Showing filtered results
                  </p>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="self-start text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 sm:self-auto"
                >
                  Reset filters
                </button>
              )}
            </div>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0 3.75h.007v.008H12v-.008ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <div>
                    <p className="font-semibold">
                      Unable to load marketplace
                    </p>

                    <p className="mt-1 text-sm">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {loading && !error && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="h-48 animate-pulse bg-slate-200 dark:bg-slate-800" />

                      <div className="space-y-3 p-5">
                        <div className="h-3 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                        <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                        <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                        <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                        <div className="h-10 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {!loading &&
              !error &&
              filteredProducts.length === 0 && (
                <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                      />
                    </svg>
                  </div>

                  <h2 className="text-lg font-semibold">
                    No products found
                  </h2>

                  <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
                    Try changing your search or filters to find more products.
                  </p>

                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}

            {!loading &&
              !error &&
              filteredProducts.length > 0 && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <article
                      key={product.id}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm text-slate-400 dark:text-slate-500">
                            <div className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="mx-auto mb-2 h-10 w-10"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.159 2.159M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5ZM8.25 8.25h.008v.008H8.25V8.25Z"
                                />
                              </svg>

                              No image
                            </div>
                          </div>
                        )}

                        {product.status && (
                          <div className="absolute left-3 top-3">
                            <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold capitalize text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-slate-200">
                              {product.status}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span
                            className={
                              product.seller_verified
                                ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                : "inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            }
                          >
                            {product.seller_verified
                              ? "Verified Seller"
                              : "Seller"}
                          </span>
                        </div>

                        <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold text-slate-900 dark:text-white">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-xl font-bold text-blue-600 dark:text-blue-400">
                          R
                          {product.price.toLocaleString(
                            "en-ZA",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </p>

                        <div className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                          {product.location && (
                            <div className="flex items-center gap-2">
                              <span className="shrink-0">
                                📍
                              </span>

                              <span className="truncate">
                                {product.location}
                              </span>
                            </div>
                          )}

                          {product.delivery_time && (
                            <div className="flex items-center gap-2">
                              <span className="shrink-0">
                                🕒
                              </span>

                              <span className="truncate">
                                {product.delivery_time}
                              </span>
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          className="mt-5 w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-sm transition-all duration-200 hover:bg-amber-500 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-amber-400/20 active:scale-[0.99]"
                        >
                          View Product
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;



