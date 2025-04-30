/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff7e5f',
          dark: '#feb47b' // Corrected the gradient end color
        },
        background: {
          light: '#ffffff', // White for light mode
          dark: '#121212'  // Dark gray for dark mode
        },
        dark: {
          900: '#121212',
          800: '#1a1a1a',
          700: '#2c2c2c'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' // Added slow pulse animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      }
    },
  },
  plugins: [
    
  ],
}