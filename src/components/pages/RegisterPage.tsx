import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

type Role = "buyer" | "seller";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<Role>("buyer");
  const [businessName, setBusinessName] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const validateForm = (): string | null => {
    const cleanName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanBusinessName = businessName.trim();

    if (cleanName.length < 2) {
      return "Please enter your full name.";
    }

    if (!cleanEmail) {
      return "Please enter your email address.";
    }

    if (!cleanEmail.includes("@")) {
      return "Please enter a valid email address.";
    }

    if (password.length < 6) {
      return "Your password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      return "Your passwords do not match.";
    }

    if (role === "seller" && cleanBusinessName.length < 2) {
      return "Please enter your business name.";
    }

    return null;
  };

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setBusinessName("");
    setRole("buyer");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError(null);
    setSuccess(null);

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const cleanName = fullName.trim();
      const cleanEmail = email.trim().toLowerCase();
      const cleanBusinessName = businessName.trim();

      const { data, error: signUpError } =
        await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              full_name: cleanName,
              role,
              business_name:
                role === "seller"
                  ? cleanBusinessName
                  : null,
            },
          },
        });

      if (signUpError) {
        throw new Error(signUpError.message);
      }

      const user = data.user;

      if (!user) {
        throw new Error(
          "Your account could not be created. Please try again."
        );
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            full_name: cleanName,
            role,
            business_name:
              role === "seller"
                ? cleanBusinessName
                : null,
          },
          {
            onConflict: "id",
          }
        );

      if (profileError) {
        console.error(
          "Profile creation error:",
          profileError
        );

        throw new Error(
          "Your account was created, but your profile could not be saved. Please try again."
        );
      }

      if (!data.session) {
        setSuccess(
          "Your account has been created successfully. Please check your email and confirm your account before signing in."
        );

        clearForm();

        return;
      }

      if (role === "seller") {
        navigate("/seller/dashboard", {
          replace: true,
        });
      } else {
        navigate("/marketplace", {
          replace: true,
        });
      }
    } catch (err) {
      console.error("Registration error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while creating your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 sm:py-10">

      {/* Boostify Brand */}
      <div className="mx-auto mb-6 flex w-full max-w-6xl justify-center">
        <Link
          to="/"
          aria-label="Boostify home"
          className="inline-flex items-center text-2xl font-extrabold text-amber-400 transition-colors hover:text-amber-300 sm:text-3xl"
        >
          <span aria-hidden="true">
            ⚡
          </span>

          <span className="ml-1">
            Boostify
          </span>
        </Link>
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl items-center justify-center sm:min-h-[calc(100vh-9rem)]">
        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden bg-slate-900 p-10 text-white dark:bg-slate-950 lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="inline-flex items-center text-lg font-extrabold text-amber-400">
                <span aria-hidden="true">
                  ⚡
                </span>

                <span className="ml-1">
                  Boostify
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Boostify Marketplace
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Discover digital products or build your own business.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                Join Boostify to discover useful digital products,
                support creators, or create and sell your own digital
                products.
              </p>
            </div>

            <p className="text-sm text-slate-400">
              Discover. Create. Sell. Grow.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="mb-7 sm:mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Join Boostify and get started in just a few steps.
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
              >
                {error}
              </div>
            )}

            {/* SUCCESS */}
            {success && (
              <div
                role="status"
                className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-700 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-300"
              >
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Full name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  disabled={loading}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  disabled={loading}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    disabled={loading}
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (visible) => !visible
                      )
                    }
                    disabled={loading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-semibold text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-500/10"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(
                        event.target.value
                      )
                    }
                    disabled={loading}
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (visible) => !visible
                      )
                    }
                    disabled={loading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-semibold text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-500/10"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirmation password"
                        : "Show confirmation password"
                    }
                  >
                    {showConfirmPassword
                      ? "Hide"
                      : "Show"}
                  </button>
                </div>
              </div>

              {/* ACCOUNT TYPE */}
              <fieldset>
                <legend className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Choose your account type
                </legend>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* BUYER */}
                  <label
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      role === "buyer"
                        ? "border-amber-400 bg-amber-50 ring-2 ring-amber-400/10 dark:border-amber-400 dark:bg-amber-500/10"
                        : "border-slate-300 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="buyer"
                      checked={role === "buyer"}
                      onChange={() =>
                        setRole("buyer")
                      }
                      disabled={loading}
                      className="sr-only"
                    />

                    <span className="block text-sm font-bold text-slate-900 dark:text-white">
                      Buyer
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Discover and purchase digital
                      products.
                    </span>
                  </label>

                  {/* SELLER */}
                  <label
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      role === "seller"
                        ? "border-amber-400 bg-amber-50 ring-2 ring-amber-400/10 dark:border-amber-400 dark:bg-amber-500/10"
                        : "border-slate-300 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="seller"
                      checked={role === "seller"}
                      onChange={() =>
                        setRole("seller")
                      }
                      disabled={loading}
                      className="sr-only"
                    />

                    <span className="block text-sm font-bold text-slate-900 dark:text-white">
                      Seller
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Create listings and sell digital
                      products.
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* BUSINESS NAME */}
              {role === "seller" && (
                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Business or store name
                  </label>

                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Enter your business or store name"
                    value={businessName}
                    onChange={(event) =>
                      setBusinessName(
                        event.target.value
                      )
                    }
                    disabled={loading}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />

                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    This name can be displayed on your
                    Boostify seller profile and storefront.
                  </p>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="flex min-h-[50px] w-full items-center justify-center rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-500 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-amber-400/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Creating account..."
                  : "Create account"}
              </button>
            </form>

            {/* LOGIN */}
            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
