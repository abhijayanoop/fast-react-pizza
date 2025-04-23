/** @type {import('tailwindcss').Config} */
// eslint-dsable-next-line

export default {
  content: ["./index.html", "./src/**/*.{js, ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    colors: {
      pizza: "#123456",
    },
    extend: {},
  },
  plugins: [],
};
