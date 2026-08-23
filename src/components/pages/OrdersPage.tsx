// src/components/pages/OrdersPage.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  products: {
    name: string;
    image_url?: string;
  };
};

type Order = {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  order_items: OrderItem[];
};

type OrderQueryItem = Omit<OrderItem, "products"> & {
  products: OrderItem["products"] | OrderItem["products"][] | null;
};

type OrderQueryRow = Omit<Order, "order_items"> & {
  order_items: OrderQueryItem[] | null;
};

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const { data, error } = await supabase
        .from("orders")
        .select(`
          id,
          status,
          total_amount,
          created_at,
          order_items (
            id,
            quantity,
            price,
            products ( name, image_url )
          )
        `)
        .eq("user_id", userData.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error.message);
      } else {
        setOrders(
          (data as OrderQueryRow[]).map((order) => ({
            id: order.id,
            status: order.status,
            total_amount: order.total_amount,
            created_at: order.created_at,
            order_items: (order.order_items || [])
              .map((item): OrderItem | null => {
                const product = Array.isArray(item.products)
                  ? item.products[0]
                  : item.products;
                return product
                  ? {
                      id: item.id,
                      quantity: item.quantity,
                      price: item.price,
                      products: product,
                    }
                  : null;
              })
              .filter((item): item is OrderItem => item !== null),
          }))
        );
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 rounded shadow space-y-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold">Order #{order.id.slice(0, 8)}</h2>
                <span className="text-sm text-gray-600">
                  {new Date(order.created_at).toLocaleDateString()}
                </span>
              </div>
              <p>Status: <span className="capitalize">{order.status}</span></p>
              <p>Total: R{order.total_amount}</p>

              <div className="space-y-2">
                {order.order_items.map((item) => {
                  const product = item.products;
                  if (!product) return null;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div className="flex items-center gap-3">
                        {product.image_url && (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                        <span>{product.name}</span>
                      </div>
                      <span>
                        {item.quantity} × R{item.price} = R
                        {item.quantity * item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
