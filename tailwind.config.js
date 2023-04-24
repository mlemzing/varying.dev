/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        256: "64rem",
      },
      animation: {
        "spin-slow": "spin 45s linear infinite",
      },
      backgroundImage: {
        "paper-texture":
          "url('https://www.transparenttextures.com/patterns/little-pluses.png')",
      },
      colors: {
        timber: "#D7D0C8",
        bone: "#C8C6AF",
        cambridge: "#95A78D",
        "rose-brown": {
          100: "#f8f3f2",
          200: "#ebdcd8",
          300: "#d7b8b2",
          400: "#caa198",
          500: "#aa7b71",
          600: "#846058",
          700: "#4c3732",
          800: "#261b19",
        },
        bittersweet: "#F87666",
      },
    },
  },
  plugins: [],
};
