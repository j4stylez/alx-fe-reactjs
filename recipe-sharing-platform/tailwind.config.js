/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all JavaScript/JSX/TypeScript files in src/
    './public/index.html',         // Includes the main HTML file in public/
  ],
  theme: {
    extend: {}, // Add custom theme extensions here if needed
  },
  plugins: [],  // Add Tailwind plugins here if needed
};