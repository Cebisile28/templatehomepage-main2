import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for navLinks
type NavLink = {
  name: string;
  path: string;
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Explicit boolean type
  const [scrolled, setScrolled] = useState<boolean>(false); // Explicit boolean type
  const location = useLocation();

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Define navLinks with the correct type
  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-amber-400 hover:text-amber-300 transition-colors duration-300 flex items-center gap-1"
        >
          <span className="font-bold">⚡</span> Boostify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-300"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-amber-400"
                />
              )}
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-gray-300 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded p-1"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-wide ${
                    location.pathname === link.path
                      ? "text-amber-400"
                      : "text-gray-300 hover:text-amber-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


