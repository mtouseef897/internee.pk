/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGray:'#F5F6F7',
        darkGray:'#7B868E',
        darkGreen:'#43A724',
        lightGreen:'#74E957',
        InactiveGreen:'#D0F0C6',
        Accent:'#B892FF',
      }
    },
  },
  plugins: [],
}

