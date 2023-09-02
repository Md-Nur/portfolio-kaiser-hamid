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
        color1: "#001247",
        color2: "#000066",
        color3: "#cfffff",
        color4: "#feffff",
      },
      dropShadow:{
        filter: "drop-shadow(0.1rem 0.1rem 0.75rem rgb(0, 0, 0))"
      }
    },
  },
  plugins: [],
};
