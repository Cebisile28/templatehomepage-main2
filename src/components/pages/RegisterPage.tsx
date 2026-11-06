
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
  const [loadingAction, setLoadingAction] = useState<
    "register" | "verify" | "resend" | null
  >(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showVerification, setShowVerification] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  // Validate registration details
  const validateForm = (): string | null => {
    if (fullName.trim().length < 2) {
      return "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return "Please enter a valid email address.";
    }

    if (password.length < 6) {
      return "Your password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      return "Your passwords do not match.";
    }

    if (role === "seller" && businessName.trim().length < 2) {
      return "Please enter your business name.";
    }

    return null;
  };

  // STEP 1: Register user and send verification email
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setError(null);
    setSuccess(null);

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setLoadingAction("register");

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
                role === "seller" ? cleanBusinessName : null,
            },
          },
        });

      if (signUpError) {
        throw signUpError;
      }

      if (!data.user) {
        throw new Error(
          "Account creation failed. Please try again."
        );
      }

      if (data.session) {
        throw new Error(
          "Email confirmation is not enabled. Please enable Confirm Email in Supabase Authentication settings."
        );
      }

      setVerificationEmail(cleanEmail);
      setVerificationCode("");
      setShowVerification(true);

      setPassword("");
      setConfirmPassword("");

      setSuccess(
        "Your account has been created! A six-digit verification code has been sent to your email."
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Registration failed."
      );
    } finally {
      setLoading(false);
      setLoadingAction(null);
    }
  };

  // STEP 2: Verify six-digit email code
  const handleVerifyEmail = async () => {
    if (loading) return;

    setError(null);
    setSuccess(null);

    if (!/^\d{6}$/.test(verificationCode)) {
      setError(
        "Please enter your complete six-digit verification code."
      );
      return;
    }

    try {
      setLoading(true);
      setLoadingAction("verify");

      const { data, error: verifyError } =
        await supabase.auth.verifyOtp({
          email: verificationEmail,
          token: verificationCode,
          type: "signup",
        });

      if (verifyError) {
        throw new Error(
          "Your verification code is incorrect or has expired. Please request a new code and try again."
        );
      }

      if (!data.user) {
        throw new Error("Verification failed. Please try again.");
      }

      // Retrieve registration details from Supabase metadata
      const metadata = data.user.user_metadata || {};

      const savedRole: Role =
        metadata.role === "seller" ? "seller" : "buyer";

      const savedName =
        metadata.full_name || fullName.trim();

      const savedBusinessName =
        metadata.business_name || businessName.trim();

      // STEP 3: Save user profile
      const { error: profileError } = await supabase
        .from("profiles")
        .upsert(
          {
            id: data.user.id,
            full_name: savedName,
            role: savedRole,
            business_name:
              savedRole === "seller"
                ? savedBusinessName
                : null,
          },
          { onConflict: "id" }
        );

      if (profileError) {
        console.error("Profile saving error:", profileError);

        throw new Error(
          "Your email is verified, but your profile could not be saved: " +
            profileError.message
        );
      }

      setSuccess(
        "Your email has been successfully verified!"
      );

      // STEP 4: Redirect to the correct dashboard
      navigate(
        savedRole === "seller"
          ? "/seller/dashboard"
          : "/marketplace",
        { replace: true }
      );

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Verification failed."
      );
    } finally {
      setLoading(false);
      setLoadingAction(null);
    }
  };

  // STEP 5: Resend a fresh verification code
  const handleResendCode = async () => {
    if (loading) return;

    setError(null);
    setSuccess(null);

    if (!verificationEmail) {
      setError(
        "Your email address is missing. Please register again."
      );
      return;
    }

    try {
      setLoading(true);
      setLoadingAction("resend");

      const { error: resendError } =
        await supabase.auth.resend({
          type: "signup",
          email: verificationEmail,
        });

      if (resendError) {
        throw resendError;
      }

      setVerificationCode("");

      setSuccess(
        "A new verification code has been sent to your email. Please use the newest code."
      );

    } catch (err) {
      console.error("Resend verification error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "We could not send a new verification code. Please try again."
      );
    } finally {
      setLoading(false);
      setLoadingAction(null);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#fdfcf8] dark:bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[440px] rounded-[2rem] border border-amber-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl shadow-amber-100/30">

        {!showVerification ? (
          <>
            <div className="text-center mb-7">
              <h1 className="text-2xl font-black tracking-tight">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Join Boostify and get started in seconds.
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300"
              >
                {error}
              </div>
            )}

            {success && (
              <div
                role="status"
                className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-300"
              >
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
            >
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                  Full name
                </label>

                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-amber-100 bg-amber-50/50 dark:bg-slate-950 dark:border-slate-700 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-amber-100 bg-amber-50/50 dark:bg-slate-950 dark:border-slate-700 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-amber-100 bg-amber-50/50 dark:bg-slate-950 dark:border-slate-700 px-4 py-3 pr-16 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-amber-600 px-2 py-1 rounded-lg hover:bg-amber-100"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Repeat password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-amber-100 bg-amber-50/50 dark:bg-slate-950 dark:border-slate-700 px-4 py-3 pr-16 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((v) => !v)
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-amber-600 px-2 py-1 rounded-lg hover:bg-amber-100"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-widest text-slate-500">
                  Choose account type
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("buyer")}
                    className={`rounded-xl border p-3 text-left transition ${
                      role === "buyer"
                        ? "border-amber-400 bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 shadow"
                        : "border-amber-100 bg-white dark:bg-slate-950 hover:border-amber-300"
                    }`}
                  >
                    <span className="block text-sm font-black">
                      Buyer
                    </span>
                    <span className="text-[11px] opacity-70">
                      Buy products
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("seller")}
                    className={`rounded-xl border p-3 text-left transition ${
                      role === "seller"
                        ? "border-amber-400 bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 shadow"
                        : "border-amber-100 bg-white dark:bg-slate-950 hover:border-amber-300"
                    }`}
                  >
                    <span className="block text-sm font-black">
                      Seller
                    </span>
                    <span className="text-[11px] opacity-70">
                      Sell products
                    </span>
                  </button>
                </div>
              </div>

              {role === "seller" && (
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                    Business / Store name
                  </label>

                  <input
                    value={businessName}
                    onChange={(e) =>
                      setBusinessName(e.target.value)
                    }
                    placeholder="Your store name"
                    required
                    className="w-full rounded-xl border border-amber-100 bg-amber-50/50 dark:bg-slate-950 dark:border-slate-700 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[48px] rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 font-black text-sm text-slate-950 shadow hover:from-amber-500 hover:to-yellow-600 transition disabled:opacity-60"
              >
                {loadingAction === "register"
                  ? "Creating account..."
                  : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-amber-600 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-black tracking-tight">
              Verify your email
            </h1>

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              We've sent a six-digit verification code to:
            </p>

            <p className="mt-2 font-bold text-slate-800 dark:text-white break-all">
              {verificationEmail}
            </p>

            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
              Enter the latest code below to activate your account.
            </p>

            {error && (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300"
              >
                {error}
              </div>
            )}

            {success && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-300"
              >
                {success}
              </div>
            )}

            <div className="mt-6">
              <label className="mb-2 block text-left text-xs font-black uppercase tracking-widest text-slate-500">
                Verification code
              </label>

              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(
                    e.target.value.replace(/\D/g, "").slice(0, 6)
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleVerifyEmail();
                  }
                }}
                placeholder="000000"
                aria-label="Six-digit verification code"
                className="w-full rounded-xl border border-amber-200 bg-amber-50/50 dark:bg-slate-950 dark:border-slate-700 px-4 py-4 text-center text-2xl font-black tracking-[0.5em] outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <button
              type="button"
              onClick={handleVerifyEmail}
              disabled={loading || verificationCode.length !== 6}
              className="mt-5 w-full h-[48px] rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 font-black text-sm text-slate-950 shadow hover:from-amber-500 hover:to-yellow-600 transition disabled:opacity-60"
            >
              {loadingAction === "verify"
                ? "Verifying..."
                : "Verify Email"}
            </button>

            <div className="mt-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Didn't receive your code, or has it expired?
              </p>

              <button
                type="button"
                onClick={handleResendCode}
                disabled={loading}
                className="mt-2 font-bold text-amber-600 hover:underline disabled:opacity-50"
              >
                {loadingAction === "resend"
                  ? "Sending new code..."
                  : "Resend verification code"}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowVerification(false);
                setVerificationCode("");
                setError(null);
                setSuccess(null);
              }}
              disabled={loading}
              className="mt-6 text-sm font-semibold text-slate-500 hover:text-amber-600 disabled:opacity-50"
            >
              Back to registration
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default RegisterPage;




