const { preinitModule } = require('react-dom');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6969ffff", // Pink
          light: "#ba85ffff",
          dark: "#5581e0ff",
        },
        emerald: "#000000",
        gold: "#FFD700",
        charcoal: "#db1414ff",
        "off-white": "#F5F5F5",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
    
  },
  plugins: [],
};
