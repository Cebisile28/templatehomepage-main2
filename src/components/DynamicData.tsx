import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number; // This comes in USD
  image: string;
};

export const DynamicData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 💱 USD → ZAR exchange rate (change if needed)
  const exchangeRate = 19; 

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
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100 animate-[fadeIn_1s_ease-in-out]">
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
            {products.map((product) => {
              // 🔁 Convert USD to ZAR
              const priceInRand = product.price * exchangeRate;

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain mb-4"
                  />
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                    {product.title}
                  </h3>

                  {/* 💰 Proper Converted Rand Price */}
                  <p className="text-amber-600 font-semibold">
                    {priceInRand.toLocaleString("en-ZA", {
                      style: "currency",
                      currency: "ZAR",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

   