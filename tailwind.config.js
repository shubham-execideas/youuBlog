/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,njk}"],
  theme: {
    extend: {
      top: {
        "-200%": "-200%",
      },
    },
  },
  plugins: [],
};