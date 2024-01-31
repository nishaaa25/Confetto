/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "black-light": "#010101",
        purple: "#840da7",
        voilet: "#887ef9",
        grey: "#96969e",
        "grey-600": "#d3d3d3",
        "grey-400": "#d8d5d1",
        "black-600": "#19191b",
        "black-700": "#191919",
        "black-500":"#212121",
        "black-800": "#171717",
        "purple-dark": "#171825",
        "whitesmoke": "#ececfb",
      },
      fontSize:{
        "4xl":["72px", "86.4px"],
        "3xl":["64px", "76.8px"],
        "2xl":"42px",
        "base":["16px", "20.8px"],
        "lg":"18px",
        "xl":["32px", "38.4px"],
        "xs":"12px",
        "sm":["14px ", "18.2px"],
      },
      fontFamily:{
        Inter: ["Inter", 'sans-serif'],
        DMSans: ["DM Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
};
