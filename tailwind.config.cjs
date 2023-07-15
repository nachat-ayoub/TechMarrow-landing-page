/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#38D9BA",
          100: "#17FFC7",
          200: "#14F3F3B2",
          300: "#9F60EF00",
        },
        secondary: {
          DEFAULT: "#121829",
        },
        black: {
          DEFAULT: "#000910",
        },
        pink: {
          DEFAULT: "#E82962",
        },
      },
    },
  },
  plugins: [],
};
