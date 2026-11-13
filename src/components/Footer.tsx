
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const linkClass =
    "block py-2 text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400";

  const headingClass =
    "mb-4 border-l-4 border-sky-400 pl-3 text-base font-bold text-slate-900 dark:text-white";

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">

      {/* Sky-blue top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-300 via-sky-500 to-sky-300" />

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* BRAND */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">

            <Link
              to="/"
              aria-label="Boostify home"
              className="inline-flex items-center text-2xl font-extrabold tracking-tight text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Boostify
              <span className="ml-2 h-2 w-2 rounded-full bg-sky-400" />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
              Empowering businesses, entrepreneurs, and creators through a
              modern digital marketplace built for growth.
            </p>

            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Explore Boostify
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className={headingClass}>
              Quick Links
            </h4>

            <ul>
              <li><Link to="/" className={linkClass}>Home</Link></li>
              <li><Link to="/about" className={linkClass}>About</Link></li>
              <li><Link to="/services" className={linkClass}>Services</Link></li>
              <li><Link to="/marketplace" className={linkClass}>Marketplace</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            </ul>

          </div>

          {/* RESOURCES */}
          <div>

            <h4 className={headingClass}>
              Resources
            </h4>

            <ul>
              <li><Link to="/pricing" className={linkClass}>Pricing</Link></li>
              <li><Link to="/marketplace" className={linkClass}>Browse Products</Link></li>
              <li><Link to="/contact" className={linkClass}>Customer Support</Link></li>
              <li><Link to="/about" className={linkClass}>Learn More</Link></li>
            </ul>

          </div>

          {/* CONTACT */}
          <div className="sm:col-span-2 lg:col-span-1">

            <h4 className={headingClass}>
              Contact
            </h4>

            <div className="space-y-4">

              <a
                href="mailto:boostifymarketplace@gmail.com"
                className="flex min-w-0 items-start gap-3 text-sm text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                <EnvelopeIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-500 dark:text-sky-400" />

                <span className="min-w-0 break-all">
                  boostifymarketplace@gmail.com
                </span>
              </a>

              <a
                href="tel:+27682531912"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                <PhoneIcon className="h-5 w-5 shrink-0 text-sky-500 dark:text-sky-400" />

                <span>+27 68 253 1912</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-500 dark:text-sky-400" />

                <span>Durban, South Africa</span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 border-t border-slate-200 pt-7 text-center dark:border-slate-800">

          <p className="text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-sm">
            © {currentYear} Boostify Marketplace. All Rights Reserved.
          </p>

          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            Discover. Connect. Grow.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
