/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem', 
        '144': '36rem',
      },
      fontFamily:{
        bebas: ['bebas']
      },
      colors:{
        primaryColor:'#d4af37',
        background2:'#3a3a3a',
        contrast: '#CC7722  '
      }
    },
  },
  plugins: [],
}

