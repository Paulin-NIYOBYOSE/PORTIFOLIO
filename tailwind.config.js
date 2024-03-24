/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      spacing: {
        100: "25rem",

        13: "30rem",
        96: "38rem",
      },
      colors: {
        purple: "#7B66FF",

      },
    },
  },
  plugins: [],
}

