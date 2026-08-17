```tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-gray-400">
      {/* Decorative Top Border */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-pulse" />

      {/* Footer Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-amber-400 sm:text-3xl">
              ⚡ Boostify
            </h3>

            <p className="max-w-md text-sm leading-7 text-gray-400">
              Empowering businesses, entrepreneurs, and creators through a
              modern digital marketplace built for growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 border-l-4 border-amber-400 pl-3 font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/marketplace"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Marketplace
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 border-l-4 border-amber-400 pl-3 font-bold text-white">
              Resources
            </h4>

            <ul className="space-y-1">
              <li>
                <Link
                  to="/pricing"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/marketplace"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Browse Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Customer Support
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block rounded-md py-2 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 border-l-4 border-amber-400 pl-3 font-bold text-white">
              Contact
            </h4>

            <div className="space-y-3">

              {/* Email */}
              <a
                href="mailto:boostifymarketplace@gmail.com"
                className="
                  flex
                  min-w-0
                  items-start
                  gap-3
                  rounded-lg
                  py-2
                  text-sm
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-amber-400
                "
              >
                <span className="shrink-0 text-lg">
                  📧
                </span>

                <span className="min-w-0 break-all hover:underline">
                  boostifymarketplace@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+27682531912"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  py-2
                  text-sm
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-amber-400
                "
              >
                <span className="shrink-0 text-lg">
                  📞
                </span>

                <span className="hover:underline">
                  +27 68 253 1912
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 py-2 text-sm text-gray-400">
                <span className="shrink-0 text-lg">
                  📍
                </span>

                <span>
                  Durban, South Africa
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center sm:mt-12">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Boostify Marketplace.

            <span className="block sm:inline">
              {" "}
              All Rights Reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```
