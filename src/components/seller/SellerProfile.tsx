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
    loadProfile();
  }, []);

  const loadProfile = async () => {
    setError("");

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.error("Auth error:", authError);
      setError("Could not identify your account.");
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

      setError(
        `Could not load your profile: ${profileError.message}`
      );

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

  const handleBack = () => {
    /*
     * Go back to the previous page if there is
     * browser/router history available.
     *
     * Otherwise, safely return to the seller dashboard.
     */
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

    setSaving(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) {
        console.error("Auth error:", authError);
        setError(authError.message);
        return;
      }

      if (!user) {
        setError("You are not logged in. Please log in again.");
        return;
      }

      console.log("Updating profile for user:", user.id);

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

        setError(
          `Could not save your changes: ${updateError.message}`
        );

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
      color: "text-blue-500",
    },
    {
      title: "Orders",
      value: "0",
      icon: ShoppingBagIcon,
      color: "text-green-500",
    },
    {
      title: "Earnings",
      value: "R0",
      icon: CurrencyDollarIcon,
      color: "text-amber-500",
    },
  ];

  return (
    <div className="space-y-8">

      {/* BACK NAVIGATION */}

      <div>
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back to previous page"
          title="Go back"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-gray-700
            shadow-sm
            transition
            duration-200
            hover:bg-gray-50
            hover:text-gray-950
            hover:shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-amber-400
            focus:ring-offset-2
            dark:border-gray-700
            dark:bg-gray-900
            dark:text-gray-300
            dark:hover:bg-gray-800
            dark:hover:text-white
          "
        >
          <ArrowLeftIcon className="h-5 w-5" />

          <span>Back</span>
        </button>
      </div>

      {/* PROFILE HEADER */}

      <section
        className="
          rounded-3xl
          bg-gradient-to-r
          from-gray-950
          via-gray-900
          to-gray-800
          p-8
          text-white
          shadow-xl
        "
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-6">

            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Seller profile"
                className="
                  h-28
                  w-28
                  rounded-full
                  border-4
                  border-amber-400
                  object-cover
                "
              />
            ) : (
              <UserCircleIcon
                className="h-28 w-28 text-gray-300"
              />
            )}

            <div>

              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {profile?.full_name || "Seller"}
              </h1>

              <p className="mt-2 text-gray-300">
                Professional Boostify Seller
              </p>

              <div className="mt-3 flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className="
                      h-5
                      w-5
                      fill-amber-400
                      text-amber-400
                    "
                  />
                ))}

                <span className="ml-2 text-sm text-gray-300">
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
              flex
              items-center
              gap-2
              rounded-xl
              bg-amber-400
              px-5
              py-3
              font-semibold
              text-gray-950
              shadow-sm
              transition
              hover:bg-amber-500
            "
          >
            <PencilSquareIcon className="h-5 w-5" />

            {editing ? "Cancel" : "Edit Profile"}
          </button>

        </div>
      </section>

      {/* SUCCESS MESSAGE */}

      {message && (
        <div
          className="
            rounded-xl
            border
            border-green-200
            bg-green-50
            px-4
            py-3
            text-sm
            font-medium
            text-green-700
            dark:border-green-800
            dark:bg-green-900/20
            dark:text-green-400
          "
        >
          {message}
        </div>
      )}

      {/* ERROR MESSAGE */}

      {error && (
        <div
          className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-sm
            font-medium
            text-red-700
            dark:border-red-800
            dark:bg-red-900/20
            dark:text-red-400
          "
        >
          {error}
        </div>
      )}

      {/* STATS */}

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-lg
                dark:border-gray-800
                dark:bg-gray-900
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h2>

                </div>

                <Icon className={`h-10 w-10 ${item.color}`} />

              </div>

            </div>
          );
        })}

      </section>

      {/* SELLER INFORMATION */}

      <section
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-8
          shadow-lg
          dark:border-gray-800
          dark:bg-gray-900
        "
      >

        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Seller Information
        </h2>

        {/* DISPLAY MODE */}

        {!editing && (
          <div className="grid gap-6 md:grid-cols-2">

            {/* EMAIL */}

            <div className="flex gap-4">

              <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-amber-400" />

              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <p className="font-semibold text-gray-900 dark:text-white">
                  {profile?.email || "Not available"}
                </p>

              </div>

            </div>

            {/* PHONE */}

            <div className="flex gap-4">

              <PhoneIcon className="h-6 w-6 flex-shrink-0 text-amber-400" />

              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>

                <p className="font-semibold text-gray-900 dark:text-white">
                  {profile?.phone || "Not added"}
                </p>

              </div>

            </div>

            {/* STORE */}

            <div className="flex gap-4">

              <BuildingStorefrontIcon className="h-6 w-6 flex-shrink-0 text-amber-400" />

              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Store Name
                </p>

                <p className="font-semibold text-gray-900 dark:text-white">
                  {profile?.store_name || "Boostify Store"}
                </p>

              </div>

            </div>

          </div>
        )}

        {/* EDIT MODE */}

        {editing && (
          <div className="space-y-5">

            {/* FULL NAME */}

            <div>

              <label
                htmlFor="full_name"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Full Name
              </label>

              <input
                id="full_name"
                type="text"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    full_name: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-amber-400
                  focus:ring-2
                  focus:ring-amber-400/20
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  dark:placeholder:text-gray-500
                "
                placeholder="Enter your full name"
              />

            </div>

            {/* PHONE */}

            <div>

              <label
                htmlFor="phone"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Phone
              </label>

              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-amber-400
                  focus:ring-2
                  focus:ring-amber-400/20
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  dark:placeholder:text-gray-500
                "
                placeholder="Enter your phone number"
              />

            </div>

            {/* STORE NAME */}

            <div>

              <label
                htmlFor="store_name"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Store Name
              </label>

              <input
                id="store_name"
                type="text"
                value={formData.store_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    store_name: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-amber-400
                  focus:ring-2
                  focus:ring-amber-400/20
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  dark:placeholder:text-gray-500
                "
                placeholder="Enter your store name"
              />

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-3 pt-2">

              <button
                type="button"
                onClick={saveChanges}
                disabled={saving}
                className="
                  rounded-xl
                  bg-green-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-600
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={cancelEditing}
                disabled={saving}
                className="
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-gray-700
                  transition
                  hover:bg-gray-50
                  disabled:opacity-60
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-gray-300
                  dark:hover:bg-gray-700
                "
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


