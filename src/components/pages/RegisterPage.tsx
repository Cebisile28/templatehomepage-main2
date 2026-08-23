import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../lib/auth";
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
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const validateForm = (): string | null => {
const trimmedName = fullName.trim();
const trimmedEmail = email.trim();
const trimmedBusinessName = businessName.trim();

if (trimmedName.length < 2) {
  return "Please enter your full name.";
}


if (!trimmedEmail) {
  return "Please enter your email address.";
}


if (password.length < 6) {
  return "Your password must be at least 6 characters long.";
}


if (password !== confirmPassword) {
  return "Your passwords do not match.";
}


if (role === "seller" && trimmedBusinessName.length < 2) {
  return "Please enter your business name.";
}


return null;

};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

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


  const result = await auth.signUp(
    cleanName,
    cleanEmail,
    password,
    role
  );


  if (result.error) {
    throw new Error(result.error.message);
  }


  const user = result.data?.user;


  if (!user) {
    throw new Error(
      "Your account could not be created. Please try again."
    );
  }


  if (role === "seller") {
    const { error: profileError } = await supabase
      .from("profiles")
      .upsert(
        {
          id: user.id,
          full_name: cleanName,
          business_name: cleanBusinessName,
          role: "seller",
        },
        {
          onConflict: "id",
        }
      );


    if (profileError) {
      console.error(
        "Seller profile error:",
        profileError
      );


      throw new Error(
        "Your account was created, but your seller profile could not be saved. Please contact support."
      );
    }
  }


  if (user) {
    if (role === "seller") {
      navigate("/seller/dashboard", { replace: true });
    } else {
      navigate("/marketplace", { replace: true });
    }


    return;
  }


  setSuccess(
    "Your account has been created. Please check your email to confirm your account before signing in."
  );


  setFullName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  setBusinessName("");
  setRole("buyer");
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
<main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6">
<div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
<div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
      <div className="hidden bg-slate-900 p-10 text-white dark:bg-slate-950 lg:flex lg:flex-col lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Boostify Marketplace
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight">
            Turn your work into something people can use.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Create an account to discover digital products or build your own storefront.
          </p>
        </div>
        <p className="text-sm text-slate-400">A marketplace for useful, thoughtful work.</p>
      </div>

      <div className="p-6 sm:p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Create your account</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Join the marketplace in a few quick steps.
          </p>
        </div>

        {error && (
          <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </div>
        )}
        {success && (
          <div role="status" className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-300">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
            <input id="fullName" name="fullName" type="text" autoComplete="name" placeholder="Your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={loading} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950" />
              <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Confirm password</label>
            <div className="relative">
              <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} autoComplete="new-password" placeholder="Repeat your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={loading} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950" />
              <button type="button" onClick={() => setShowConfirmPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600" aria-label={showConfirmPassword ? "Hide confirmation password" : "Show confirmation password"}>{showConfirmPassword ? "Hide" : "Show"}</button>
            </div>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Account type</legend>
            <div className="grid grid-cols-2 gap-3">
              {(["buyer", "seller"] as const).map((accountRole) => (
                <label key={accountRole} className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm capitalize dark:border-slate-700">
                  <input type="radio" name="role" value={accountRole} checked={role === accountRole} onChange={() => setRole(accountRole)} disabled={loading} />
                  {accountRole}
                </label>
              ))}
            </div>
          </fieldset>

          {role === "seller" && (
            <div>
              <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Business name</label>
              <input id="businessName" name="businessName" type="text" autoComplete="organization" placeholder="Your business name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} disabled={loading} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950" />
            </div>
          )}

          <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account? <Link to="/login" className="font-semibold text-blue-600 dark:text-blue-400">Sign in</Link>
        </p>
      </div>
    </div>
  </div>
</main>
);
};

export default RegisterPage;

