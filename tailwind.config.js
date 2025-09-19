/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'emerald': { 500: '#2E7D5B' },
        'coral': '#E76F51',
        'gold': '#FFD166',
        'charcoal': '#222222',
        'off-white': '#FAFAFA',
      }
    },
  },
  plugins: [],
}