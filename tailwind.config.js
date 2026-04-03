/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00d2ff",
        "secondary": "#3a7bd5",
        "background-dark": "#0B1120",
        "surface-dark": "#151e32",
        "accent-pink": "#d946ef",
        "accent-purple": "#8b5cf6",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
