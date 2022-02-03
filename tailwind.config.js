module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#362222",
        accent: "#F76E11",
        hover: "#FF9F45",
      },
      fontFamily: {
        monoton: "'Monoton', system-ui, sans-serif",
        sora: "'sora', system-ui, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
