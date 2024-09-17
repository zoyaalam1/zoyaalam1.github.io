/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A24E00',
        secondary: '#474747',
        tertiary: '#fffdf7',
      },
    },
  },
  plugins: [],
}

