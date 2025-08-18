/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html" // Added to scan for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
