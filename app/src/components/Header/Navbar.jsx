import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#2c2c2c] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent hover:from-[#ff6f4f] hover:to-[#fea46b] transition-all duration-300"
            >
              YV
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              About
            </a>
            <a
              href="#projects" // Added Projects link
              className="text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#ff7e5f] focus:outline-none transition-all duration-300"
            >
              {/* Hamburger Icon (Transforms into "X" when menu is open) */}
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  // "X" Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slides Down) */}
      <div
        className={`md:hidden bg-[#1a1a1a] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2  space-y-1 sm:px-3">
          <a
            href="#home"
            className="block text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            About
          </a>
          <a
            href="#projects" // Added Projects link
            className="block text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-[#ff7e5f] px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
