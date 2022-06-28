const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      background: "#FFFAEB",
      primary: "#89651D",
      secondary: "#433923",
      accent: "#F2B440",
      "text-dark": "#211E1D",
      "text-light": "#FFFAEB",
      gray: "#ACACAC",
    },
    extend: {
      fontFamily: {
        serif: ["Sora", ...defaultTheme.fontFamily.serif],
        sora: ["Sora"],
      },
    },
  },
  plugins: [],
};
