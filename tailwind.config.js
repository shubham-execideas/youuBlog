/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1025px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center left",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 1rem",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      45: "45%",
      16: "4rem",
    },
    extend: {
      top: {
        "-200%": "-200%",
      },
      width: {
        30: "30%",
        330: "330px",
        19: "19%",
      },
      margin: {
        1.2: "5px",
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