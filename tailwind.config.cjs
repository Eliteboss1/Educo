/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      VisbyRegular: ["Visby Regular", "Visby"],
      VisbyBold: ["Visby Bold", "Visby"],
      VisbyLight: ["Visby Light", "Visby"],
      VisbyMedium: ["Visby Medium", "Visby"],
      VisbySemibold: ["Visby Semibold", "Visby"],
      VisbyThin: ["Visby Thin", "Visby"],
    },
    extend: {},
  },
  plugins: [],
};
