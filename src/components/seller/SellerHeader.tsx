
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

import {
  BellIcon,
  UserCircleIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

type Profile = {
  full_name: string;
  avatar_url: string | null;
};

const SellerHeader: React.FC = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem("seller-theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error loading seller profile:", error);
        return;
      }

      if (data) setProfile(data);
    };

    void loadProfile();
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("seller-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("seller-theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error);
      return;
    }

    navigate("/login");
  };

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const sellerName = profile?.full_name?.trim() || "Seller";

  const dropdownItemClass =
    "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300";

  return (
    <header className="mb-8">
      <div
        className="
          flex flex-col justify-between gap-6
          rounded-3xl border border-sky-100
          bg-white p-6 text-slate-800 shadow-sm
          transition-colors duration-300
          dark:border-slate-800 dark:bg-slate-900 dark:text-white
          md:p-8 lg:flex-row
        "
      >
        {/* LEFT SIDE */}
        <div className="min-w-0">
          <p className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            {today}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            {greeting},{" "}
            <span className="break-words text-sky-500">
              {sellerName}
            </span>
            <span className="ml-1">👋</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
            Welcome back! Manage your products, sales, customers and
            marketplace growth from here.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate("/seller/products/create")}
              className="
                flex items-center gap-2 rounded-xl
                bg-sky-500 px-5 py-3 font-semibold text-white
                shadow-sm transition duration-200
                hover:bg-sky-600 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-sky-400
                focus:ring-offset-2 dark:focus:ring-offset-slate-900
                active:scale-[0.98]
              "
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add Product</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/marketplace")}
              className="
                flex items-center gap-2 rounded-xl
                border border-sky-200 bg-sky-50
                px-5 py-3 font-semibold text-sky-700
                transition duration-200 hover:bg-sky-100
                focus:outline-none focus:ring-2 focus:ring-sky-400
                dark:border-slate-700 dark:bg-slate-800
                dark:text-sky-300 dark:hover:bg-slate-700
              "
            >
              View Store
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-start gap-3">
          {/* THEME BUTTON */}
          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="
              rounded-xl border border-slate-200 bg-white p-3
              text-sky-600 transition hover:bg-sky-50
              focus:outline-none focus:ring-2 focus:ring-sky-400
              dark:border-slate-700 dark:bg-slate-800
              dark:text-sky-300 dark:hover:bg-slate-700
            "
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          {/* NOTIFICATIONS */}
          <div className="relative">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="
                relative rounded-xl border border-slate-200
                bg-white p-3 text-sky-600 transition
                hover:bg-sky-50 focus:outline-none
                focus:ring-2 focus:ring-sky-400
                dark:border-slate-700 dark:bg-slate-800
                dark:text-sky-300 dark:hover:bg-slate-700
              "
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-sky-500 ring-2 ring-white dark:ring-slate-800" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                <div className="border-b border-slate-200 px-4 py-4 dark:border-slate-700">
                  <h3 className="font-bold">Notifications</h3>
                </div>

                <div className="px-4 py-5">
                  <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">
                    No new notifications yet.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="relative">
            <button
              type="button"
              aria-label="Seller profile menu"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="
                flex items-center gap-3 rounded-xl
                border border-slate-200 bg-white p-2
                text-slate-700 transition hover:bg-sky-50
                focus:outline-none focus:ring-2 focus:ring-sky-400
                dark:border-slate-700 dark:bg-slate-800
                dark:text-white dark:hover:bg-slate-700
              "
            >
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={`${sellerName} profile`}
                  className="h-12 w-12 rounded-xl border-2 border-sky-400 object-cover"
                />
              ) : (
                <UserCircleIcon className="h-12 w-12 text-sky-500" />
              )}
            </button>

            {showProfile && (
              <div className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                <div className="border-b border-slate-200 px-4 py-4 dark:border-slate-700">
                  <p className="break-words font-bold text-slate-900 dark:text-white">
                    {sellerName}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Seller Account
                  </p>
                </div>

                <div className="p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/seller/profile");
                    }}
                    className={dropdownItemClass}
                  >
                    <UserIcon className="h-5 w-5 text-sky-500" />
                    <span>My Profile</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/seller/analytics");
                    }}
                    className={dropdownItemClass}
                  >
                    <ChartBarIcon className="h-5 w-5 text-sky-500" />
                    <span>Analytics</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/seller/settings");
                    }}
                    className={dropdownItemClass}
                  >
                    <Cog6ToothIcon className="h-5 w-5 text-sky-500" />
                    <span>Settings</span>
                  </button>

                  <div className="my-2 border-t border-slate-200 dark:border-slate-700" />

                  <button
                    type="button"
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SellerHeader;


