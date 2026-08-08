// src/components/pages/RegisterPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../lib/auth";
import { supabase } from "../../lib/supabase";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [businessName, setBusinessName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await auth.signUp(fullName, email, password, role);

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
      return;
    }

    // If seller, save extra business info in profiles
    if (role === "seller" && result.data?.user) {
      await supabase.from("profiles").upsert({
        id: result.data.user.id,
        business_name: businessName,
      });
    }

    // Redirect based on role
    if (role === "buyer") {
      navigate("/marketplace");
    } else {
      navigate("/seller/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Role toggle */}
        <div className="flex gap-4 mb-4">
          <label>
            <input
              type="radio"
              value="buyer"
              checked={role === "buyer"}
              onChange={() => setRole("buyer")}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              value="seller"
              checked={role === "seller"}
              onChange={() => setRole("seller")}
            />
            Seller
          </label>
        </div>

        {/* Extra seller fields */}
        {role === "seller" && (
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

