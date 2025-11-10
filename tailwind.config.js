/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",                // ✅ App Router pages, layouts, etc.
    "./src/components/**/*.{js,jsx}",         // ✅ Your components
    "./src/hooks/**/*.{js,jsx}",              // ✅ Any custom hooks
    "./node_modules/@react-bits/**/*.{js,jsx}", // ✅ React Bits (ColorBends)
    "./node_modules/@shadcn/ui/**/*.{js,jsx}",  // ✅ shadcn/ui library
  ],
  theme: {
    extend: {},
  },
};
