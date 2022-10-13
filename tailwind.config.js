/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title': ['Josefin Sans', 'sans-serif'],
        'text':[ 'Source Code Pro','monospace']
      },
      colors:{
       background:{
        700:'#5B5959'
       }
      },
    },
  },
  plugins: [],
}