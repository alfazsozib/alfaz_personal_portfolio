/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      colors: {
      'primary':'#9B43F3',
      'secondary':'#141414',
      'heading-text':'#FFFFFF',
      'nav-text':'#C4C4C4',
    },
    fontFamily: {
      'poppins':['Poppins','serif']
    },
  },
  },
  plugins: [],
}