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
        'own-border-color' : '#E6E6EF' 
      }
    },
  },
  plugins: [],
}

