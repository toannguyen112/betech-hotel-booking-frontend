/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "max-3xl": { max: "1535px" },
      "max-2xl": { max: "1439px" },
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "424px" },
    },
    extend: {
      colors: {
        primary: "#FF5747",
        white: "#FFFFFF",
        black: "#19191A",
        gray: {
          100: "#F6F6F8",
          200: "#EAECEE",
          300: "#D9DADB",
          400: "#B7B7B7",
          500: "#989898",
          600: "#707070",
          700: "#535458",
          800: "#39393A",
        },
        red: {
          0: "#FFF3F3",
          50: "#FFDEDE",
          100: "#FFDAD6",
          200: "#FFA299",
          300: "#FF5747",
          400: "#FF311F",
          450: "#DD0F01",
          500: "#DD1100",
          550: "#D72630",
          600: "#B80F00",
          700: "#8F0C00",
          800: "#520700",
          900: "#140200",
        },
        blue: {
          400: "#3174DA",
        },
      },
      backgroundImage: {
        "black-linear": "linear-gradient(0deg, #19191a 0%, rgba(25, 25, 26, 0) 100%);",
      },
      boxShadow: {
        0: "0px 4px 10px rgba(82, 82, 82, 0.15)",
        1: "0px 4px 20px rgba(0, 0, 0, 0.15)",
      },

      fontFamily: {},

      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
      },
    },
  },
  plugins: [],
}
