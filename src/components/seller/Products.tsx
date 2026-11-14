import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

type Product = {
  id: string;
  title: string;
  category: string | null;
  price: number;
  status: "draft" | "active" | "archived";
  image_url: string | null;
  created_at: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    void loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("seller_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Unable to load products:", error.message);
    } else {
      setProducts((data || []) as Product[]);
    }

    setLoading(false);
  };

  const deleteProduct = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      window.alert(`Unable to delete product: ${error.message}`);
      return;
    }

    await loadProducts();
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-slate-500 dark:text-slate-400">
          Loading your products...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Products
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Create, manage, and track your digital products.
          </p>
        </div>

        <Link
          to="/seller/products/create"
          className="rounded-xl bg-sky-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
        >
          + Add Product
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            label: "Total Products",
            value: products.length,
            style: "text-slate-900 dark:text-white",
          },
          {
            label: "Active Products",
            value: products.filter((p) => p.status === "active").length,
            style: "text-sky-600 dark:text-sky-400",
          },
          {
            label: "Draft Products",
            value: products.filter((p) => p.status === "draft").length,
            style: "text-slate-600 dark:text-slate-300",
          },
          {
            label: "Product Sales",
            value: "R0.00",
            style: "text-slate-900 dark:text-white",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
            <h2 className={`mt-2 text-3xl font-bold ${stat.style}`}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your products..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-sky-900/40"
        />
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Your Products
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="py-10 text-center text-slate-500 dark:text-slate-400">
            {search ? "No products match your search." : "No products yet."}
            <br />
            Create your first digital product.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {["Product", "Category", "Price", "Status", "Created", "Actions"].map(
                    (heading) => (
                      <th key={heading} className="whitespace-nowrap p-3">
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-slate-100 dark:border-slate-800"
                  >
                    <td className="p-3 text-slate-900 dark:text-white">
                      <div className="flex items-center gap-3">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.title}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-500 dark:bg-slate-800">
                            No Image
                          </div>
                        )}
                        <span className="font-semibold">{product.title}</span>
                      </div>
                    </td>

                    <td className="p-3 text-slate-500 dark:text-slate-400">
                      {product.category || "Uncategorized"}
                    </td>
                    <td className="whitespace-nowrap p-3 font-semibold text-slate-900 dark:text-white">
                      R{Number(product.price).toFixed(2)}
                    </td>
                    <td className="p-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                          product.status === "active"
                            ? "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap p-3 text-slate-500 dark:text-slate-400">
                      {new Date(product.created_at).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap p-3">
                      <button
                        type="button"
                        onClick={() =>
                          window.alert(
                            "Connect this button to your product editing page."
                          )
                        }
                        className="mr-3 font-medium text-sky-600 hover:text-sky-800 dark:text-sky-400"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => void deleteProduct(product.id)}
                        className="font-medium text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
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

export default Products;
