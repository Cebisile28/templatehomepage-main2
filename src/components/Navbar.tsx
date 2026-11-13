
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import type { User } from "@supabase/supabase-js";

import DarkModeToggle from "./DarkModeToggle";
import { signOut } from "../lib/auth";
import { supabase } from "../lib/supabase";

type NavLink = {
  name: string;
  path: string;
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"buyer" | "seller" | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  const currentUserId = useRef<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Keep the latest authenticated user ID available
  useEffect(() => {
    currentUserId.current = user?.id ?? null;
  }, [user]);

  // Load authenticated user and role
  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      try {
        const {
          data: { user: currentUser },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error("Could not load user:", error.message);
        }

        if (!mounted) return;

        setUser(currentUser ?? null);

        if (!currentUser) {
          currentUserId.current = null;
          setRole(null);
          return;
        }

        currentUserId.current = currentUser.id;

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", currentUser.id)
          .maybeSingle();

        if (profileError) {
          console.error("Could not load user role:", profileError.message);
        }

        if (!mounted || currentUserId.current !== currentUser.id) return;

        setRole(
          profile?.role === "buyer" || profile?.role === "seller"
            ? profile.role
            : null
        );
      } catch (error) {
        console.error("Unexpected authentication error:", error);
      }
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;

      if (!mounted) return;

      setUser(currentUser);
      currentUserId.current = currentUser?.id ?? null;

      if (!currentUser) {
        setRole(null);
        return;
      }

      Promise.resolve().then(async () => {
        if (!mounted) return;

        try {
          const { data: profile, error } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", currentUser.id)
            .maybeSingle();

          if (error) {
            console.error("Could not load user role:", error.message);
          }

          if (!mounted || currentUser.id !== currentUserId.current) return;

          setRole(
            profile?.role === "buyer" || profile?.role === "seller"
              ? profile.role
              : null
          );
        } catch (error) {
          console.error("Unexpected profile error:", error);
        }
      });
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Logout
  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      const { error } = await signOut();

      if (error) {
        console.error("Logout error:", error.message);
        alert(`Logout failed: ${error.message}`);
        return;
      }

      setUser(null);
      setRole(null);
      currentUserId.current = null;
      setMenuOpen(false);

      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Unexpected logout error:", error);

      alert(
        error instanceof Error
          ? `Logout failed: ${error.message}`
          : "Something went wrong while logging out."
      );
    } finally {
      setLoggingOut(false);
    }
  };

  // Highlight active navigation link
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full border-b border-sky-400/30 bg-sky-500 transition-all duration-300 ${
        scrolled
          ? "shadow-lg shadow-sky-900/20"
          : "shadow-sm shadow-sky-900/10"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Boostify Logo */}
        <Link
          to="/"
          aria-label="Boostify home"
          className="flex shrink-0 items-center text-xl font-extrabold text-amber-400 transition-colors hover:text-amber-300 sm:text-2xl"
        >
          <span aria-hidden="true" className="text-amber-400">
            ⚡
          </span>
          <span className="ml-1">Boostify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex lg:gap-6">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`whitespace-nowrap text-xs font-semibold uppercase tracking-wide transition-colors lg:text-sm ${
                isActive(link.path)
                  ? "text-white underline decoration-amber-400 decoration-2 underline-offset-8"
                  : "text-white hover:text-amber-200"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Seller Dashboard */}
          {user && role === "seller" && (
            <Link
              to="/seller/dashboard"
              className={`whitespace-nowrap text-xs font-semibold uppercase tracking-wide transition-colors lg:text-sm ${
                location.pathname.startsWith("/seller")
                  ? "text-white underline decoration-amber-400 decoration-2 underline-offset-8"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Seller Dashboard
            </Link>
          )}

          {/* Signed-in user */}
          {user ? (
            <>
              <span className="hidden max-w-[180px] truncate text-xs text-white xl:block">
                Hi,{" "}
                <span className="font-bold text-amber-300">
                  {user.email}
                </span>
              </span>

              <button
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
                className="whitespace-nowrap text-xs font-bold uppercase text-white transition hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm"
              >
                {loggingOut ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="whitespace-nowrap text-xs font-semibold uppercase text-white transition-colors hover:text-amber-200 lg:text-sm"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase text-sky-600 shadow-sm transition hover:bg-amber-300 hover:text-sky-900 lg:text-sm"
              >
                Register
              </Link>
            </>
          )}

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-center rounded-full bg-white/15 p-1">
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/50 bg-white/10 text-white transition hover:bg-white/20 hover:text-amber-200 md:hidden"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-sky-400 bg-sky-600 shadow-2xl md:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-4 sm:px-6">

              {/* Public links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                      isActive(link.path)
                        ? "bg-white/15 text-white"
                        : "text-white hover:bg-white/10 hover:text-amber-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Seller Dashboard */}
                {user && role === "seller" && (
                  <Link
                    to="/seller/dashboard"
                    className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                      location.pathname.startsWith("/seller")
                        ? "bg-white/15 text-white"
                        : "text-white hover:bg-white/10 hover:text-amber-200"
                    }`}
                  >
                    Seller Dashboard
                  </Link>
                )}
              </div>

              {/* Account section */}
              <div className="mt-4 border-t border-white/20 pt-4">

                {user ? (
                  <div className="space-y-3">

                    <div className="rounded-xl border border-white/20 bg-sky-700 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-100">
                        Signed In
                      </p>

                      <p className="mt-1 break-all text-sm font-bold text-amber-300">
                        {user.email}
                      </p>

                      {role && (
                        <p className="mt-2 text-xs text-white">
                          Role:
                          <span className="ml-1 capitalize font-semibold text-amber-300">
                            {role}
                          </span>
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="w-full rounded-lg border border-red-200/40 px-4 py-3 text-left text-sm font-semibold uppercase text-white transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loggingOut ? "Logging out..." : "Logout"}
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">

                    <Link
                      to="/login"
                      className="rounded-lg border border-white/60 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-white/10"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="rounded-lg bg-white px-4 py-3 text-center text-sm font-bold uppercase text-sky-700 transition hover:bg-amber-300"
                    >
                      Register
                    </Link>
                  </div>
                )}

                {/* Dark mode */}
                <div className="mt-4 flex items-center justify-between rounded-lg border border-white/20 bg-sky-700 px-4 py-3">
                  <span className="text-sm font-medium text-white">
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






