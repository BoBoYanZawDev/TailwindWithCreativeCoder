/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class' ,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'own-primary' : '#7971EB' ,
        'own-color-light' :'#E6E6EF' ,
      }
    },
  },
  plugins: [],
}

