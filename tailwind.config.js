const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      background: "#FFFAEB",
      primary: "#D26D25",
      secondary: "#433923",
      accent: "#D26D25",
      "text-dark": "#211E1D",
      "text-light": "#FFFAEB",
      gray: "#ACACAC",
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        cinzel: ["Cinzel Decorative"],
        katibeh: ["Katibeh"],
      },
    },
  },
  plugins: [],
};
