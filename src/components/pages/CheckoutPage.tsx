// src/components/pages/CheckoutPage.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: string;
  quantity: number;
  products: {
    id: string;
    name: string;
    price: number;
    image_url?: string;
  };
};

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryOption, setDeliveryOption] = useState("economy");

  // Fetch cart items for logged-in user
  useEffect(() => {
    const fetchCart = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const { data, error } = await supabase
        .from("cart")
        .select("id, quantity, products(id, name, price, image_url)")
        .eq("user_id", userData.user.id);

      if (error) {
        console.error("Error fetching cart:", error.message);
      } else {
        setCartItems(
          (data as any[])
            .map((item) => ({
              id: item.id,
              quantity: item.quantity,
              products: item.products,
            }))
            .filter((item) => item.products && item.products.name && item.products.price)
        );
      }
    };

    fetchCart();
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.products.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      alert("You must be logged in to place an order.");
      return;
    }

    // 1. Create order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: userData.user.id,
        status: "pending",
        total_amount: total,
      })
      .select()
      .single();

    if (orderError) {
      console.error("Error creating order:", orderError.message);
      alert("❌ Failed to place order.");
      return;
    }

    // 2. Insert order items
    const orderItemsPayload = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.products.id,
      quantity: item.quantity,
      price: item.products.price,
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItemsPayload);

    if (itemsError) {
      console.error("Error inserting order items:", itemsError.message);
      alert("❌ Failed to save order items.");
      return;
    }

    // 3. Clear cart
    const { error: clearError } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", userData.user.id);

    if (clearError) {
      console.error("Error clearing cart:", clearError.message);
    }

    alert("✅ Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Order summary */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-2">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.products.name} x {item.quantity}
                </span>
                <span>R{item.products.price * item.quantity}</span>
              </div>
            ))}
            <p>Subtotal: R{subtotal}</p>
            <p>Delivery Fee: R{deliveryFee}</p>
            <p className="font-bold">Total: R{total}</p>
          </>
        )}
      </div>

      {/* Payment options */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-2">Payment Method</h2>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="eft"
              checked={paymentMethod === "eft"}
              onChange={() => setPaymentMethod("eft")}
            />
            EFT (Bank Transfer)
          </label>
          <label>
            <input
              type="radio"
              value="momo"
              checked={paymentMethod === "momo"}
              onChange={() => setPaymentMethod("momo")}
            />
            MTN MoMo / VodaPay
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>
        </div>
      </div>

      {/* Delivery options */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-2">Delivery Option</h2>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="radio"
              value="economy"
              checked={deliveryOption === "economy"}
              onChange={() => setDeliveryOption("economy")}
            />
            Economy (3–5 days)
          </label>
          <label>
            <input
              type="radio"
              value="express"
              checked={deliveryOption === "express"}
              onChange={() => setDeliveryOption("express")}
            />
            Express (1–2 days)
          </label>
          <label>
            <input
              type="radio"
              value="pickup"
              checked={deliveryOption === "pickup"}
              onChange={() => setDeliveryOption("pickup")}
            />
            Pickup Point (Spaza Shop / Hub)
          </label>
        </div>
      </div>

      {/* Place order */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;




