// src/components/pages/MarketplacePage.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ProductFilters from "../seller/ProductFilters";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  seller_id: string;
  seller_verified: boolean;
  location: string;
  delivery_time: string;
  category?: string;
  status?: string;
};

const MarketplacePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select(`
        id, name, price, image_url, seller_id, location, delivery_time, status,
        profiles (role, full_name, verified)
      `);

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        // Map verified sellers
        const mapped = data.map((p: any) => ({
          ...p,
          seller_verified: p.profiles?.verified ?? false,
        }));
        setProducts(mapped);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((p) => {
      const matchesSearch =
        !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !category || p.category === category;
      const matchesStatus = !status || p.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (sort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "title":
          return a.name.localeCompare(b.name);
        case "oldest":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">Marketplace</h1>
      </header>

      <div className="flex">
        {/* Filters sidebar */}
        <aside className="w-64 p-4 border-r bg-white">
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
        </aside>

        {/* Product grid */}
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-5 border border-gray-200"
            >
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              ) : (
                <div className="w-full h-48 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                  No image
                </div>
              )}
              <div className="mb-3 text-sm text-gray-500">
                {product.seller_verified ? "Verified Seller" : "Seller"}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">R{product.price}</p>
              <p className="text-sm text-gray-500 mb-2">
                {product.location} · {product.delivery_time}
              </p>
              <button className="w-full bg-amber-400 text-black py-2 rounded-xl font-semibold hover:bg-amber-500 transition">
                View Product
              </button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default MarketplacePage;
