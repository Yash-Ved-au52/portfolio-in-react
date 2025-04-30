import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from '../../ThemeContext';
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className={`sticky top-0 w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile menu button - Left side */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${darkMode ? 'text-gray-300 hover:text-[#ff7e5f]' : 'text-gray-700 hover:text-[#ff7e5f]'}`}
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent hover:from-[#ff6f4f] hover:to-[#fea46b] transition-all duration-300"
            >
              YV
            </a>
          </div>

          {/* Desktop Navigation - Center aligned */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span className={`absolute bottom-1 left-1/2 h-0.5 w-0 bg-[#ff7e5f] transition-all duration-300 -translate-x-1/2 group-hover:w-3/4`}></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dark mode toggle - Right side */}
          <motion.button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full focus:outline-none ${darkMode ? 'text-gray-300 hover:text-yellow-300' : 'text-gray-700 hover:text-gray-900'}`}
            aria-label="Toggle dark mode"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block px-3 py-3 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} hover:bg-opacity-10 ${darkMode ? 'hover:bg-white' : 'hover:bg-gray-800'}`}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;