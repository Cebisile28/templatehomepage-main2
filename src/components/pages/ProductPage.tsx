// src/components/pages/ProductPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  seller_id: string;
  location: string;
  delivery_time: string;
};

type SellerProfile = {
  full_name: string | null;
  verified: boolean | null;
  business_name: string | null;
  location: string | null;
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [seller, setSeller] = useState<SellerProfile | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error.message);
      } else {
        setProduct(data);

        // Fetch seller profile
        if (data?.seller_id) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("full_name, verified, business_name, location")
            .eq("id", data.seller_id)
            .single();
          setSeller(profile);
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-6">Loading product...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">
        {/* Product image */}
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-96 object-cover rounded"
        />

        {/* Product details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">
            R{product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Seller info */}
          {seller && (
            <div className="mb-6 p-4 border rounded bg-gray-50">
              <h2 className="text-lg font-bold">Seller Information</h2>
              <p>{seller.business_name || seller.full_name}</p>
              <p>{seller.location}</p>
              {seller.verified && (
                <span className="text-green-600 font-semibold">✔ Verified Seller</span>
              )}
            </div>
          )}

          {/* Delivery info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold">Delivery Options</h2>
            <p>Estimated delivery: {product.delivery_time}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Buy Now
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Wishlist
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Group Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
