/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#0D1117",
        color2: "#21262C",
        color3: "#F0F2F4",
        color4: "#FFFFFF",
      },
      dropShadow:{
        filter: "drop-shadow(0.1rem 0.1rem 0.75rem rgb(0, 0, 0))"
      }
    },
  },
  plugins: [],
};
