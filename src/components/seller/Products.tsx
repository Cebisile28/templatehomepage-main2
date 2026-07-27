import React, { useEffect, useState } from "react";
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
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("seller_id", user.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data as Product[]);
    }

    setLoading(false);
  };

  const deleteProduct = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");

    if (!confirmed) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (!error) {
      void loadProducts();
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-gray-500 dark:text-gray-400">Loading your products...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Products</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Create, manage, and track your digital products.
          </p>
        </div>

        <Link
          to="/seller/products/create"
          className="mt-5 rounded-xl bg-amber-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-amber-300 md:mt-0"
        >
          + Add Product
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{products.length}</h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500">Active Products</p>
          <h2 className="mt-2 text-3xl font-bold text-green-500">
            {products.filter((product) => product.status === "active").length}
          </h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500">Draft Products</p>
          <h2 className="mt-2 text-3xl font-bold text-amber-400">
            {products.filter((product) => product.status === "draft").length}
          </h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm text-gray-500">Product Sales</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">R0.00</h2>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your products..."
          className="w-full rounded-lg bg-gray-100 p-3 text-gray-900 outline-none dark:bg-gray-800 dark:text-white"
        />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Your Products</h2>

        {filteredProducts.length === 0 ? (
          <div className="py-10 text-center text-gray-500 dark:text-gray-400">
            No products found.
            <br />
            Create your first digital product.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 dark:border-gray-800">
                  <th className="p-3">Product</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Created</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 text-gray-900 dark:text-white">
                      <div className="flex items-center gap-3">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.title}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-xs dark:bg-gray-800">
                            No Image
                          </div>
                        )}

                        <span className="font-semibold">{product.title}</span>
                      </div>
                    </td>

                    <td className="p-3 text-gray-500 dark:text-gray-400">
                      {product.category || "Uncategorized"}
                    </td>

                    <td className="p-3 font-semibold text-gray-900 dark:text-white">
                      R{Number(product.price).toFixed(2)}
                    </td>

                    <td className="p-3">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          product.status === "active"
                            ? "bg-green-100 text-green-700"
                            : product.status === "draft"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>

                    <td className="p-3 text-gray-500 dark:text-gray-400">
                      {new Date(product.created_at).toLocaleDateString()}
                    </td>

                    <td className="p-3">
                      <div className="flex gap-3">
                        <button className="text-blue-500 hover:text-blue-700">Edit</button>

                        <button
                          onClick={() => void deleteProduct(product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
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
