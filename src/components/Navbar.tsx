import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import type { User } from "@supabase/supabase-js";

import DarkModeToggle from "./DarkModeToggle";
import { supabase } from "../lib/supabase";
import { signOut } from "../lib/auth";

type NavLink = {
  name: string;
  path: string;
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"buyer" | "seller" | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Detect page scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scrolling while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Load authenticated user
  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!mounted) return;

      setUser(user);

      if (!user) {
        setRole(null);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (!mounted) return;

      if (profile) {
        setRole(profile.role);
      }
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;

      if (!mounted) return;

      setUser(currentUser);

      if (!currentUser) {
        setRole(null);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", currentUser.id)
        .single();

      if (!mounted) return;

      if (profile) {
        setRole(profile.role);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await signOut();

    if (error) {
      alert(error.message);
      return;
    }

    setUser(null);
    setRole(null);
    setMenuOpen(false);

    navigate("/login");
  };

  const navLinks: NavLink[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Marketplace",
      path: "/marketplace",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-black/95 shadow-lg backdrop-blur-md"
            : "bg-black/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0"
        }
      `}
    >
      {/* Navbar container */}
      <div
        className="
          mx-auto
          flex
          h-16
          w-full
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex
            shrink-0
            items-center
            text-xl
            font-extrabold
            text-amber-400
            transition-colors
            hover:text-amber-300
            sm:text-2xl
          "
        >
          <span>⚡</span>
          <span className="ml-1">Boostify</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                whitespace-nowrap
                text-xs
                font-medium
                uppercase
                tracking-wide
                transition-colors
                lg:text-sm
                ${
                  isActive(link.path)
                    ? "text-amber-400"
                    : "text-gray-300 hover:text-amber-300"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {role === "seller" && (
            <Link
              to="/seller"
              className="
                whitespace-nowrap
                text-xs
                font-medium
                uppercase
                text-gray-300
                transition-colors
                hover:text-amber-300
                lg:text-sm
              "
            >
              Seller Dashboard
            </Link>
          )}

          {user ? (
            <>
              <span className="hidden max-w-[180px] truncate text-xs text-gray-300 xl:block">
                Hi,{" "}
                <span className="font-semibold text-amber-400">
                  {user.email}
                </span>
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  whitespace-nowrap
                  text-xs
                  font-medium
                  uppercase
                  text-red-400
                  transition
                  hover:text-red-300
                  lg:text-sm
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="
                  whitespace-nowrap
                  text-xs
                  font-medium
                  uppercase
                  text-gray-300
                  transition-colors
                  hover:text-amber-300
                  lg:text-sm
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                  whitespace-nowrap
                  text-xs
                  font-medium
                  uppercase
                  text-amber-400
                  transition-colors
                  hover:text-amber-300
                  lg:text-sm
                "
              >
                Register
              </Link>
            </>
          )}

          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-gray-700
            bg-black/30
            text-gray-200
            transition
            hover:border-amber-400
            hover:text-amber-400
            md:hidden
          "
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              max-h-[calc(100vh-4rem)]
              overflow-y-auto
              border-t
              border-gray-800
              bg-black/98
              shadow-2xl
              md:hidden
            "
          >
            <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-4 sm:px-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      font-medium
                      uppercase
                      tracking-wide
                      transition
                      ${
                        isActive(link.path)
                          ? "bg-amber-400/10 text-amber-400"
                          : "text-gray-300 hover:bg-gray-800 hover:text-amber-300"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}

                {role === "seller" && (
                  <Link
                    to="/seller"
                    className="
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      font-medium
                      uppercase
                      tracking-wide
                      text-gray-300
                      transition
                      hover:bg-gray-800
                      hover:text-amber-300
                    "
                  >
                    Seller Dashboard
                  </Link>
                )}
              </div>

              {/* Account section */}
              <div className="mt-4 border-t border-gray-800 pt-4">
                {user ? (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Signed In
                      </p>

                      <p className="mt-1 break-all text-sm font-medium text-amber-400">
                        {user.email}
                      </p>

                      {role && (
                        <p className="mt-2 text-xs text-gray-400">
                          Role:
                          <span className="ml-1 capitalize text-amber-400">
                            {role}
                          </span>
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        w-full
                        rounded-lg
                        border
                        border-red-500/20
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-medium
                        uppercase
                        text-red-400
                        transition
                        hover:bg-red-500/10
                        hover:text-red-300
                      "
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/login"
                      className="
                        rounded-lg
                        border
                        border-gray-700
                        px-4
                        py-3
                        text-center
                        text-sm
                        font-medium
                        uppercase
                        text-gray-300
                        transition
                        hover:border-amber-400
                        hover:text-amber-300
                      "
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="
                        rounded-lg
                        bg-amber-400
                        px-4
                        py-3
                        text-center
                        text-sm
                        font-bold
                        uppercase
                        text-black
                        transition
                        hover:bg-amber-300
                      "
                    >
                      Register
                    </Link>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-900 px-4 py-3">
                  <span className="text-sm text-gray-400">
                    Appearance
                  </span>

                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


