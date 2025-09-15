import React from 'react';

const Footer = () => {
  return (
    // Using CSS Grid for responsive footer layout
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-10">
        {/* Responsive grid layout with different column counts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            {/* Added hover animation for brand name */}
            <h3 className="text-xl font-bold text-amber-400 mb-4 hover:text-amber-300 transition-colors duration-300">
              YourBrand
            </h3>
            <p className="mb-4">
              A modern starter template with a clean design using black, gold, and silver gray colors.
            </p>
          </div>
          {/* Using Flexbox for link columns */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <address className="not-italic space-y-2">
              <p>123 Main Street</p>
              <p>Anytown, USA 12345</p>
              <p className="mt-2">info@yourbrand.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        {/* Added subtle animation for copyright text */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="hover:text-amber-400 transition-colors duration-300">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;