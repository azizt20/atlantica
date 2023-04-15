/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1B202E",
        primary: "#CC4400",
        silver: "#CECECD",
        snow: "#FCFCFC",
        black: "#161413",
        txt: "#666C89",
        title: "#1C1F35",
      },
    },
  },
  plugins: [],
}

