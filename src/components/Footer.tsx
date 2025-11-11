import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-400 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-pulse" />

      <div className="container mx-auto px-4 py-14 relative z-10">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 animate-[fadeIn_1s_ease-in-out_forwards]">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-amber-400 mb-4 hover:text-amber-300 transition-all duration-300 hover:tracking-wide">
              Boostify
            </h3>
            <p className="text-gray-400 max-w-xs">
              Empowering brands with elegant, modern web experiences. 🚀
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <FaFacebook />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-amber-400 transition-transform duration-300 hover:scale-125"
                  aria-label="Social link"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-amber-400 pl-3">
              Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-all duration-300 hover:pl-2 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l-4 border-amber-400 pl-3">
              Resources
            </h4>
            <ul className="space-y-2">
              {["Documentation", "Blog", "Support"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-all duration-300 hover:pl-2 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 border-l
