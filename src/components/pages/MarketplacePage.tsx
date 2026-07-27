import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
};

const MarketplacePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ NEW: search state
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("📦 PRODUCTS FROM SUPABASE:", data);
      console.log("⚠️ SUPABASE ERROR:", error);

      if (error) {
        console.error("Fetch error:", error.message);
      }

      setProducts(data || []);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("🧠 PRODUCTS STATE UPDATED:", products);
  }, [products]);

  // ✅ NEW: filter logic
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-amber-400 mb-6">
        Marketplace
      </h1>

      {/* ✅ SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 rounded bg-gray-800 text-white"
      />

      {loading ? (
        <p className="text-gray-400">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-gray-400">
          No matching products found 🚀
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* ✅ REPLACED MAP */}
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={product.image_url}
                alt={product.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl text-amber-400 font-bold">
                  {product.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                <p className="text-white font-bold mt-3">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* DEBUG (optional) */}
      <pre className="text-green-400 text-xs mt-10 overflow-x-auto">
        {JSON.stringify(products, null, 2)}
      </pre>
    </div>
  );
};

export default MarketplacePage;