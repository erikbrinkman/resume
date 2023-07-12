const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        title: ["Josefin Sans", "san-serif"],
      },
      listStyleType: {
        triangle: '"▸"',
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
