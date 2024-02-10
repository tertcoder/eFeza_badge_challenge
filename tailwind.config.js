/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#F3F3F3",
        "main-white": "#FFFFFF",
        "txt-grey": "#868686",
        "sm-grey": "#AAAAAA",
        "input-bg": "#FAFAFA",
        "main-one": "#409FD9",
        "main-two": "#083553",
      },
      fontFamily: {
        nunito: ["Nunito, sans-serif"],
      },
    },
  },
  plugins: [],
};
