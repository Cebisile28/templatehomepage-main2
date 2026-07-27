import React, { useState } from "react";
import { signIn } from "../../lib/auth";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await signIn(
        email.trim(),
        password
      );

      if (error) {
        toast.error(error.message);
        return;
      }

      if (!data?.user) {
        toast.error("Login failed. Please try again.");
        return;
      }

      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError || !profile) {
        console.error("Profile error:", profileError);

        await supabase.auth.signOut();

        toast.error(
          "Your account profile no longer exists. Please register again."
        );

        navigate("/register");
        return;
      }

      toast.success("👋 Welcome back to Boostify!");

      if (profile.role === "seller") {
        navigate("/seller");
      } else {
        navigate("/marketplace");
      }

    } catch (error) {
      console.error("Login error:", error);

      toast.error(
        "Something went wrong while logging in."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-900
        text-white
        px-4
      "
    >
      <form
        onSubmit={handleLogin}
        className="
          bg-gray-800
          p-8
          rounded-lg
          w-full
          max-w-md
          space-y-4
          shadow-xl
        "
      >
        <div>
          <h1
            className="
              text-2xl
              font-bold
              text-amber-400
            "
          >
            Login
          </h1>

          <p
            className="
              text-sm
              text-gray-400
              mt-2
            "
          >
            Login to access your marketplace account.
          </p>
        </div>

        <input
          className="
            w-full
            p-3
            rounded
            bg-gray-700
            outline-none
          "
          placeholder="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="
            w-full
            p-3
            rounded
            bg-gray-700
            outline-none
          "
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-amber-400
            text-black
            py-3
            rounded
            font-bold
            hover:bg-amber-300
            disabled:opacity-50
          "
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;