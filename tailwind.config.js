/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto_regular: ["Roboto-regular", "sans-serif"],
      Roboto_bold: ["Roboto-bold", "sans-serif"],
    },
    extend: {
      colors:{
        background:"#36384D",
        purple_dark :'#232742'
      },
      screens:{
        mobile:"480px",
        'desktop': '890px',
        'desktop-large': '1410px',
      },
      padding: {
        '10px': '10px',
      }
    },
  },
  plugins: [],
}

