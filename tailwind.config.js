/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF9F0",
        secondary: "#FDC366",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier New", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 4px 0px #00000040",
      },

      spacing: {
        72: "72px",
      },
    },
  },
  plugins: [],
};
