/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#F3F3F3",
        "main-white": "#FFFFFF",
        "txt-grey": "#868686",
        "input-bg": "#FAFAFA",
        "main-one": "#409FD9",
        "main-two": "#083553",
        "main-three": "#083553",
      },
    },
  },
  plugins: [],
};
