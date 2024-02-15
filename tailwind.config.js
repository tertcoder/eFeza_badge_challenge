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
        "main-three": "#1C81C5",
      },
      fontFamily: {
        nunito: ["Nunito, sans-serif"],
      },
      screens: {
        w916: "916px",
        w600: "600px",
        w500: "500px",
        w400: "400px",
      },
    },
  },
  plugins: [],
};
