
// src/components/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../lib/auth";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const result = await auth.signIn(email, password);

      if (result.error) {
        setError(result.error.message);
        return;
      }

      if (result.data?.user) {
        // Fetch the user's role from profiles
        const role = await auth.getUserRole(result.data.user.id);

        if (role === "buyer") {
          navigate("/marketplace");
        } else if (role === "seller") {
          navigate("/seller/dashboard");
        } else {
          // Fallback if the role is missing
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while logging in."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full">
          {/* Login Card */}
          <div
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-6
              shadow-xl
              shadow-slate-200/50
              transition-colors
              duration-300
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
            "
          >
            {/* Header */}
            <div className="mb-8 text-center">
              <div
                className="
                  mx-auto mb-4
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                  dark:bg-blue-500/10
                  dark:text-blue-400
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Sign in to continue to your account
              </p>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="
                  mb-5
                  rounded-xl
                  border border-red-200
                  bg-red-50
                  px-4 py-3
                  text-sm text-red-700
                  dark:border-red-900/50
                  dark:bg-red-950/40
                  dark:text-red-300
                "
              >
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>

                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  disabled={loading}
                  className="
                    w-full
                    rounded-xl
                    border border-slate-300
                    bg-white
                    px-4 py-3
                    text-sm text-slate-900
                    placeholder:text-slate-400
                    outline-none
                    transition-all
                    duration-200
                    hover:border-slate-400
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:hover:border-slate-600
                    dark:focus:border-blue-500
                    dark:focus:ring-blue-500/10
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  className="
                    w-full
                    rounded-xl
                    border border-slate-300
                    bg-white
                    px-4 py-3
                    text-sm text-slate-900
                    placeholder:text-slate-400
                    outline-none
                    transition-all
                    duration-200
                    hover:border-slate-400
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:hover:border-slate-600
                    dark:focus:border-blue-500
                    dark:focus:ring-blue-500/10
                  "
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-4 py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-200
                  hover:bg-blue-700
                  hover:shadow-blue-600/30
                  focus:outline-none
                  focus:ring-4
                  focus:ring-blue-500/20
                  active:scale-[0.99]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:bg-blue-600
                "
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>

                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            {/* Bottom Text */}
            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Enter your account details to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
```

