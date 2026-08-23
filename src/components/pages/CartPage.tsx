import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: string;
  quantity: number;
  products: {
    name: string;
    price: number;
    image_url?: string;
  };
};

type CartQueryRow = Omit<CartItem, "products"> & {
  products: CartItem["products"] | CartItem["products"][] | null;
};

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const { data, error } = await supabase
        .from("cart")
        .select("id, quantity, products(name, price, image_url)")
        .eq("user_id", userData.user.id);

      if (error) {
        console.error("Error fetching cart:", error.message);
      } else {
        setCartItems(
          (data as CartQueryRow[])
            .map((item): CartItem | null => {
              const product = Array.isArray(item.products)
                ? item.products[0]
                : item.products;
              return product?.name && product.price
                ? { id: item.id, quantity: item.quantity, products: product }
                : null;
            })
            .filter((item): item is CartItem => item !== null)
        );
      }
    };

    fetchCart();
  }, []);

  const updateQuantity = async (id: string, newQty: number) => {
    if (newQty < 1) return;
    const { error } = await supabase
      .from("cart")
      .update({ quantity: newQty })
      .eq("id", id);
    if (error) console.error(error.message);
    else {
      setCartItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const removeItem = async (id: string) => {
    const { error } = await supabase.from("cart").delete().eq("id", id);
    if (error) console.error(error.message);
    else setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.products.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => {
            const product = item.products;
            return (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 bg-white p-3 rounded shadow"
              >
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p>R{product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:underline ml-4"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div className="bg-white p-4 rounded shadow mt-6">
            <p>Subtotal: R{subtotal}</p>
            <p>Delivery Fee: R{deliveryFee}</p>
            <p className="font-bold">Total: R{total}</p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
