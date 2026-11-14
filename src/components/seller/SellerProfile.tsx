
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
  StarIcon,
  CubeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

type Profile = {
  id?: string;
  full_name: string;
  avatar_url: string | null;
  email?: string;
  phone?: string;
  store_name?: string;
};

const SellerProfile: React.FC = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    store_name: "Boostify Store",
  });

  useEffect(() => {
    const loadProfile = async () => {
      setError("");

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        setError("Could not identify your account.");
        console.error("Auth error:", authError);
        return;
      }

      if (!user) {
        setError("You are not logged in.");
        return;
      }

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Error loading seller profile:", profileError);
        setError(`Could not load your profile: ${profileError.message}`);
        return;
      }

      if (data) {
        const loadedProfile: Profile = {
          ...data,
          email: user.email ?? "",
        };

        setProfile(loadedProfile);

        setFormData({
          full_name: data.full_name ?? "",
          phone: data.phone ?? "",
          store_name: data.store_name ?? "Boostify Store",
        });
      }
    };

    void loadProfile();
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/seller/dashboard");
    }
  };

  const saveChanges = async () => {
    setMessage("");
    setError("");

    if (!profile) {
      setError("Profile information is not available.");
      return;
    }

    if (!formData.full_name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    setSaving(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        setError("You are not logged in. Please log in again.");
        return;
      }

      const updatedValues = {
        full_name: formData.full_name.trim(),
        phone: formData.phone.trim(),
        store_name: formData.store_name.trim(),
      };

      const { data, error: updateError } = await supabase
        .from("profiles")
        .update(updatedValues)
        .eq("id", user.id)
        .select("*")
        .single();

      if (updateError) {
        console.error("SUPABASE UPDATE ERROR:", updateError);
        setError(`Could not save your changes: ${updateError.message}`);
        return;
      }

      if (!data) {
        setError(
          "The profile was not updated. Please check your Supabase RLS policy."
        );
        return;
      }

      const updatedProfile: Profile = {
        ...data,
        email: user.email ?? "",
      };

      setProfile(updatedProfile);

      setFormData({
        full_name: data.full_name ?? "",
        phone: data.phone ?? "",
        store_name: data.store_name ?? "Boostify Store",
      });

      setMessage("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      console.error("Unexpected profile update error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred."
      );
    } finally {
      setSaving(false);
    }
  };

  const cancelEditing = () => {
    if (profile) {
      setFormData({
        full_name: profile.full_name ?? "",
        phone: profile.phone ?? "",
        store_name: profile.store_name ?? "Boostify Store",
      });
    }

    setMessage("");
    setError("");
    setEditing(false);
  };

  const stats = [
    {
      title: "Products",
      value: "0",
      icon: CubeIcon,
    },
    {
      title: "Orders",
      value: "0",
      icon: ShoppingBagIcon,
    },
    {
      title: "Earnings",
      value: "R0",
      icon: CurrencyDollarIcon,
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500";

  const labelClass =
    "mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300";

  return (
    <div className="space-y-8">
      {/* BACK BUTTON */}
      <div>
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back to previous page"
          className="
            inline-flex items-center gap-2 rounded-xl
            border border-slate-200 bg-white px-4 py-2.5
            text-sm font-semibold text-slate-700 shadow-sm
            transition hover:border-sky-200 hover:bg-sky-50
            hover:text-sky-700 focus:outline-none
            focus:ring-2 focus:ring-sky-400
            dark:border-slate-700 dark:bg-slate-900
            dark:text-slate-300 dark:hover:bg-slate-800
          "
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      {/* PROFILE HEADER */}
      <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Seller profile"
                className="h-24 w-24 rounded-full border-4 border-sky-100 object-cover dark:border-sky-500/30 md:h-28 md:w-28"
              />
            ) : (
              <UserCircleIcon className="h-24 w-24 text-sky-400 md:h-28 md:w-28" />
            )}

            <div className="min-w-0">
              <h1 className="break-words text-2xl font-bold text-slate-900 dark:text-white md:text-4xl">
                {profile?.full_name || "Seller"}
              </h1>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Professional Boostify Seller
              </p>

              <div className="mt-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className="h-5 w-5 fill-sky-400 text-sky-400"
                  />
                ))}

                <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                  5.0 Seller Rating
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (editing) {
                cancelEditing();
              } else {
                setEditing(true);
                setMessage("");
                setError("");
              }
            }}
            className="
              flex items-center justify-center gap-2 rounded-xl
              bg-sky-500 px-5 py-3 font-semibold text-white
              shadow-sm transition hover:bg-sky-600
              focus:outline-none focus:ring-2 focus:ring-sky-400
              focus:ring-offset-2 dark:focus:ring-offset-slate-900
            "
          >
            <PencilSquareIcon className="h-5 w-5" />
            {editing ? "Cancel Editing" : "Edit Profile"}
          </button>
        </div>
      </section>

      {/* SUCCESS MESSAGE */}
      {message && (
        <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-700 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300">
          {message}
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300"
        >
          {error}
        </div>
      )}

      {/* STATS */}
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.title}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-sky-50 p-3 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* SELLER INFORMATION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Seller Information
        </h2>

        {!editing && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <EnvelopeIcon className="h-6 w-6 shrink-0 text-sky-500" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p className="break-all font-semibold text-slate-900 dark:text-white">
                  {profile?.email || "Not available"}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <PhoneIcon className="h-6 w-6 shrink-0 text-sky-500" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {profile?.phone || "Not added"}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BuildingStorefrontIcon className="h-6 w-6 shrink-0 text-sky-500" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Store Name
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {profile?.store_name || "Boostify Store"}
                </p>
              </div>
            </div>
          </div>
        )}

        {editing && (
          <div className="space-y-5">
            <div>
              <label htmlFor="full_name" className={labelClass}>
                Full Name
              </label>
              <input
                id="full_name"
                type="text"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                className={inputClass}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={inputClass}
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="store_name" className={labelClass}>
                Store Name
              </label>
              <input
                id="store_name"
                type="text"
                value={formData.store_name}
                onChange={(e) =>
                  setFormData({ ...formData, store_name: e.target.value })
                }
                className={inputClass}
                placeholder="Enter your store name"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={saveChanges}
                disabled={saving}
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={cancelEditing}
                disabled={saving}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SellerProfile;



