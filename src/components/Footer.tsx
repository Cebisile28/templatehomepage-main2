import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-400 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-pulse" />

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold text-amber-400">
              ⚡ Boostify
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Empowering businesses, entrepreneurs, and creators through a
              modern digital marketplace built for growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-amber-400 pl-3">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/marketplace"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Marketplace
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-amber-400 pl-3">
              Resources
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/pricing"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/marketplace"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Browse Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Customer Support
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block hover:text-amber-400 transition-all duration-300 hover:translate-x-2"
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-amber-400 pl-3">
              Contact
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:boostifymarketplace@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
              >
                <span className="text-xl">📧</span>
                <span className="hover:underline">
                  boostifymarketplace@gmail.com
                </span>
              </a>

              <a
                href="tel:+27682531912"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
              >
                <span className="text-xl">📞</span>
                <span className="hover:underline">
                  +27 68 253 1912
                </span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-xl">📍</span>
                <span>Durban, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Boostify Marketplace. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;