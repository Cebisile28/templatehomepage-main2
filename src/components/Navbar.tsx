import React, { useState } from 'react';

const Navbar = () => {
  // Added state for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Using Flexbox for navbar layout
    <header className="bg-black text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Added hover animation for brand name */}
          <div className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors duration-300">
            Boostify
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-amber-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-amber-400 transition-all duration-300 hover:scale-110 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <ul className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="block hover:text-amber-400 transition-colors duration-300 hover:pl-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;