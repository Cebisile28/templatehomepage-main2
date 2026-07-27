import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
};

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
        <img
          src={product.image_url}
          className="w-full h-80 object-cover rounded"
        />

        <h1 className="text-3xl text-amber-400 mt-4">
          {product.title}
        </h1>

        <p className="text-gray-300 mt-2">
          {product.description}
        </p>

        <p className="text-2xl font-bold mt-4">
          ${product.price}
        </p>

        <button className="mt-6 bg-amber-400 text-black px-6 py-3 rounded font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;