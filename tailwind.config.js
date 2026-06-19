/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      "xs": "475px",
      ...defaultTheme.screens,        
    },
    extend: {
      fontFamily: {
        "display": ["Cormorant Garamond", "serif"],
        "openSans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        paper: {
          DEFAULT: "#f7f5f1",
          panel: "#efece6",
        },
        ink: {
          DEFAULT: "#1a1714",
          soft: "#6b645c",
        },
        sand: {
          DEFAULT: "#b9a888",
          dark: "#9d8c6c",
        },
        line: "#e4dfd6",
      },
      backgroundImage: {
        "section-top-desktop": ["url('../images/bg-section-top-desktop-1.svg')"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(26, 23, 20, 0.22)",
      },
      letterSpacing: {
        luxe: "0.25em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
}