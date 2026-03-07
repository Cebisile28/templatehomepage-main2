import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
};

export const DynamicData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Latest Products
        </h2>

        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg animate-pulse h-96"
              ></div>
            ))}
          </div>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain mb-4 rounded-lg transition-transform duration-300 hover:scale-110"
                  />

                  {/* New Product Badge */}
                  <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold py-1 px-2 rounded-md">
                    New
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4">
                  {product.title}
                </h3>

                {/* Quick View Button */}
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-amber-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-amber-500 transition duration-200">
                    Quick View
                  </button>

                  {/* Optional: Add to Cart Button */}
                  <button className="bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-400 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

   