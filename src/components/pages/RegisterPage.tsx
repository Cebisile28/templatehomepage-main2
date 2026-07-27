import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signUp } from "../../lib/auth";

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const { error } = await signUp(
      fullName.trim(),
      email.trim(),
      password,
      role
    );

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("🎉 Welcome to Boostify!\n\nYour account has been created successfully.");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-12 text-white">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-4 rounded-lg bg-gray-800 p-8 shadow-xl"
      >
        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Join as a buyer or seller and start exploring the marketplace.
          </p>
        </div>

        <input
          className="w-full rounded bg-gray-700 p-3 outline-none ring-0"
          placeholder="Full Name"
          type="text"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          className="w-full rounded bg-gray-700 p-3 outline-none ring-0"
          placeholder="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded bg-gray-700 p-3 outline-none ring-0"
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="block">
          <span className="mb-2 block text-sm text-gray-300">
            I want to join as
          </span>

          <select
            className="w-full rounded bg-gray-700 p-3"
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "buyer" | "seller")
            }
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-amber-400 py-3 font-bold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-amber-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
