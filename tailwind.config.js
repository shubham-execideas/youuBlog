/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,njk}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      top: {
        "-200%": "-200%",
      },
      width: {
        30: "30%",
      },
      colors: {
        sumireVoilet: "#6c54a0",
        bgpurple: "#A93890",
        bgpink: "#E6436F",
        bgyellow: "#F27D52",
      },
    },
  },
  plugins: [],
};