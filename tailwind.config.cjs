/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        jet: ["JetBrains Mono", "sans-serif"],
      },
      colors: {
        primary: {
          tint: "rgb(165 180 252)",
          DEFAULT: "rgb(99 102 241)",
          shade: "rgb(55 48 163)",
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s 1',
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: 'translate(0, -100)' },
          "100%": { opacity: 1, transform: 'translate(0, 0)' },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
