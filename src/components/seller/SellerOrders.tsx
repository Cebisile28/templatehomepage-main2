// src/components/seller/SellerOrders.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type SellerOrderItem = {
  id: string;
  quantity: number;
  price: number;
  products: {
    name: string;
    image_url?: string;
  };
  orders: {
    id: string;
    status: string;
    total_amount: number;
    created_at: string;
    user_id: string;
  };
};

type SellerOrderQueryRow = {
  id: string;
  quantity: number;
  price: number;
  products: { name: string; image_url?: string; seller_id?: string } | { name: string; image_url?: string; seller_id?: string }[] | null;
  orders: { id: string; status: string; total_amount: number; created_at: string; user_id: string } | { id: string; status: string; total_amount: number; created_at: string; user_id: string }[] | null;
};

const SellerOrders: React.FC = () => {
  const [orders, setOrders] = useState<SellerOrderItem[]>([]);

  useEffect(() => {
    const fetchSellerOrders = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      // Fetch order_items joined with products and orders, filtered by seller_id
      const { data, error } = await supabase
        .from("order_items")
        .select(`
          id,
          quantity,
          price,
          products ( name, image_url, seller_id ),
          orders ( id, status, total_amount, created_at, user_id )
        `)
        .eq("products.seller_id", userData.user.id)
        .order("created_at", { referencedTable: "orders", ascending: false });

      if (error) {
        console.error("Error fetching seller orders:", error.message);
      } else {
        setOrders(
          (data || []).map((item: SellerOrderQueryRow) => {
            const product = Array.isArray(item.products)
              ? item.products[0]
              : item.products;
            const order = Array.isArray(item.orders)
              ? item.orders[0]
              : item.orders;

            return {
              id: item.id,
              quantity: item.quantity,
              price: item.price,
              products: {
                name: product?.name ?? "Unknown Product",
                image_url: product?.image_url,
              },
              orders: {
                id: order?.id ?? "",
                status: order?.status ?? "Unknown",
                total_amount: order?.total_amount ?? 0,
                created_at: order?.created_at ?? new Date().toISOString(),
                user_id: order?.user_id ?? "",
              },
            } as SellerOrderItem;
          })
        );
      }
    };

    fetchSellerOrders();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((item) => (
            <div
              key={item.id}
              className="border-b pb-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                {item.products.image_url && (
                  <img
                    src={item.products.image_url}
                    alt={item.products.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <div>
                  <p className="font-semibold">{item.products.name}</p>
                  <p className="text-sm text-gray-500">
                    Order #{item.orders.id.slice(0, 8)} •{" "}
                    {new Date(item.orders.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm">Status: {item.orders.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p>
                  {item.quantity} × R{item.price}
                </p>
                <p className="font-bold">
                  R{item.quantity * item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerOrders;
