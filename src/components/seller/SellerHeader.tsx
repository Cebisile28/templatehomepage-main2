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

  /*
   * LOAD SELLER PROFILE
   */
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

      if (data) {
        setProfile(data);
      }
    };

    loadProfile();
  }, []);

  /*
   * APPLY THEME
   */
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

  /*
   * TOGGLE THEME
   */
  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  /*
   * LOGOUT
   */
  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  /*
   * GREETING
   */
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  /*
   * DATE
   */
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const sellerName =
    profile?.full_name?.trim() || "Seller";

  return (
    <header className="mb-8">
      <div
        className="
          flex
          flex-col
          justify-between
          gap-6
          rounded-3xl
          border
          border-gray-800
          bg-gradient-to-r
          from-gray-950
          via-gray-900
          to-gray-800
          p-6
          text-white
          shadow-xl
          transition-colors
          duration-300
          md:p-8
          lg:flex-row
        "
      >
        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="min-w-0">
          {/* DATE */}

          <p className="mb-2 text-sm font-medium text-gray-300">
            {today}
          </p>

          {/* GREETING */}

          <h1
            className="
              text-3xl
              font-bold
              leading-tight
              text-white
              md:text-4xl
            "
          >
            <span className="text-white">
              {greeting},
            </span>

            <span className="ml-2 break-words text-amber-400">
              {sellerName}
            </span>

            <span className="ml-1">
              👋
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-gray-300
              md:text-base
            "
          >
            Welcome back! Manage your products, sales,
            customers and marketplace growth from here.
          </p>

          {/* ACTION BUTTONS */}

          <div className="mt-6 flex flex-wrap gap-3">
            {/* ADD PRODUCT */}

            <button
              type="button"
              onClick={() => navigate("/seller/products/create")}
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
                duration-200
                hover:bg-amber-500
                hover:shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-amber-300
                focus:ring-offset-2
                focus:ring-offset-gray-900
                active:scale-[0.98]
              "
            >
              <PlusIcon className="h-5 w-5" />

              <span>Add Product</span>
            </button>

            {/* VIEW STORE */}

            <button
              type="button"
              onClick={() => navigate("/marketplace")}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                font-semibold
                text-white
                transition
                duration-200
                hover:border-white/30
                hover:bg-white/20
                focus:outline-none
                focus:ring-2
                focus:ring-white/30
                active:scale-[0.98]
              "
            >
              <span>View Store</span>
            </button>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="relative flex items-start gap-3">
          {/* =========================
              THEME BUTTON
          ========================== */}

          <button
            type="button"
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            onClick={toggleTheme}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/10
              p-3
              text-white
              transition
              duration-200
              hover:bg-white/20
              focus:outline-none
              focus:ring-2
              focus:ring-white/30
              active:scale-95
            "
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          {/* =========================
              NOTIFICATIONS
          ========================== */}

          <div className="relative">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="
                relative
                rounded-xl
                border
                border-white/10
                bg-white/10
                p-3
                text-white
                transition
                duration-200
                hover:bg-white/20
                focus:outline-none
                focus:ring-2
                focus:ring-white/30
              "
            >
              <BellIcon className="h-6 w-6" />

              <span
                className="
                  absolute
                  right-2
                  top-2
                  h-2
                  w-2
                  rounded-full
                  bg-red-500
                  ring-2
                  ring-gray-900
                "
              />
            </button>

            {/* NOTIFICATIONS DROPDOWN */}

            {showNotifications && (
              <div
                className="
                  absolute
                  right-0
                  z-50
                  mt-3
                  w-72
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  text-gray-900
                  shadow-2xl
                  dark:border-gray-700
                  dark:bg-gray-900
                  dark:text-white
                "
              >
                <div
                  className="
                    border-b
                    border-gray-200
                    px-4
                    py-4
                    dark:border-gray-700
                  "
                >
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                </div>

                <div className="px-4 py-5">
                  <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
                    No new notifications yet.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* =========================
              PROFILE
          ========================== */}

          <div className="relative">
            <button
              type="button"
              aria-label="Seller profile menu"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/10
                p-2
                text-white
                transition
                duration-200
                hover:bg-white/20
                focus:outline-none
                focus:ring-2
                focus:ring-white/30
              "
            >
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={`${sellerName} profile`}
                  className="
                    h-12
                    w-12
                    rounded-xl
                    border-2
                    border-amber-400
                    object-cover
                  "
                />
              ) : (
                <UserCircleIcon className="h-12 w-12 text-white" />
              )}
            </button>

            {/* PROFILE DROPDOWN */}

            {showProfile && (
              <div
                className="
                  absolute
                  right-0
                  z-50
                  mt-3
                  w-64
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  text-gray-900
                  shadow-2xl
                  dark:border-gray-700
                  dark:bg-gray-900
                  dark:text-white
                "
              >
                {/* PROFILE NAME */}

                <div
                  className="
                    border-b
                    border-gray-200
                    px-4
                    py-4
                    dark:border-gray-700
                  "
                >
                  <p
                    className="
                      break-words
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {sellerName}
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Seller Account
                  </p>
                </div>

                {/* MENU */}

                <div className="p-2">
                  {/* MY PROFILE */}

                  <button
                    type="button"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/seller/profile");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-medium
                      text-gray-700
                      transition
                      hover:bg-gray-100
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:bg-gray-800
                      dark:hover:text-white
                    "
                  >
                    <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />

                    <span>My Profile</span>
                  </button>

                  {/* ANALYTICS */}

                  <button
                    type="button"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/seller/analytics");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-medium
                      text-gray-700
                      transition
                      hover:bg-gray-100
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:bg-gray-800
                      dark:hover:text-white
                    "
                  >
                    <ChartBarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />

                    <span>Analytics</span>
                  </button>

                  {/* SETTINGS */}

                  <button
                    type="button"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/seller/settings");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-medium
                      text-gray-700
                      transition
                      hover:bg-gray-100
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:bg-gray-800
                      dark:hover:text-white
                    "
                  >
                    <Cog6ToothIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />

                    <span>Settings</span>
                  </button>

                  {/* LOGOUT */}

                  <div className="my-2 border-t border-gray-200 dark:border-gray-700" />

                  <button
                    type="button"
                    onClick={logout}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      text-left
                      text-sm
                      font-medium
                      text-red-600
                      transition
                      hover:bg-red-50
                      hover:text-red-700
                      dark:text-red-400
                      dark:hover:bg-red-500/10
                      dark:hover:text-red-300
                    "
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

