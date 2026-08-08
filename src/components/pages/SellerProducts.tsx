// src/components/seller/SellerProducts.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Product = {
  id: string;
  name: string;
  price: number;
  status: string;
  image_url?: string;
};

const PAGE_SIZE = 5; // number of products per page

const SellerProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    status: "active",
    image_url: "",
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Fetch seller products with pagination + search
  useEffect(() => {
    const fetchProducts = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      let query = supabase
        .from("products")
        .select("*", { count: "exact" })
        .eq("seller_id", userData.user.id);

      if (search.trim()) {
        query = query.ilike("name", `%${search}%`);
      }

      const { data, error, count } = await query
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, [page, search]);

  // Upload image to Supabase Storage
  const handleImageUpload = async (file: File) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return "";
    }

    const { data: publicUrlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  };

  // Add product
  const handleAddProduct = async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) return;

    const { data, error } = await supabase
      .from("products")
      .insert({
        ...newProduct,
        seller_id: userData.user.id,
      })
      .select();

    if (error) {
      console.error("Error adding product:", error.message);
    } else {
      setProducts([...products, ...(data || [])]);
      setNewProduct({ name: "", price: 0, status: "active", image_url: "" });
    }
  };

  // Update product
  const handleUpdateProduct = async () => {
    if (!editingProduct) return;

    const { error } = await supabase
      .from("products")
      .update({
        name: editingProduct.name,
        price: editingProduct.price,
        status: editingProduct.status,
        image_url: editingProduct.image_url,
      })
      .eq("id", editingProduct.id);

    if (error) {
      console.error("Error updating product:", error.message);
    } else {
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? editingProduct : p))
      );
      setEditingProduct(null);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      console.error("Error deleting product:", error.message);
    } else {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // Pagination controls

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Products</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset to first page when searching
        }}
        className="border p-2 w-full rounded mb-4"
      />

      {/* Add product form */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: Number(e.target.value) })
          }
          className="border p-2 w-full rounded"
        />
        <input
          type="file"
          onChange={async (e) => {
            if (e.target.files?.[0]) {
              const url = await handleImageUpload(e.target.files[0]);
              setNewProduct({ ...newProduct, image_url: url });
            }
          }}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Product
        </button>
      </div>

      {/* Product list */}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b pb-2"
            >
              {editingProduct?.id === product.id ? (
                // Edit mode
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                    className="border p-2 w-full rounded"
                  />
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: Number(e.target.value),
                      })
                    }
                    className="border p-2 w-full rounded"
                  />
                  <select
                    value={editingProduct.status}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, status: e.target.value })
                    }
                    className="border p-2 w-full rounded"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <input
                    type="file"
                    onChange={async (e) => {
                      if (e.target.files?.[0]) {
                        const url = await handleImageUpload(e.target.files[0]);
                        setEditingProduct({ ...editingProduct, image_url: url });
                      }
                    }}
                    className="border p-2 w-full rounded"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleUpdateProduct}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Display mode
                <>
                  <div className="flex items-center gap-3">
                    {product.image_url && (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-500">R{product.price}</p>
                      <p className="text-sm">Status: {product.status}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerProducts;

