/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    keyframes:{
      slideDown:{
        "0%":{transform: "translateY(-10px)", opacity: "0"},
        "100%":{transform: "translateY(0)", opacity: "1"}
      },
      slideUp:{
        "0%":{transform: "translateY(0px)", opacity: "1"},
        "100%":{transform: "translateY(-10px)", opacity: "0"}
      }
    },

    animation:{
      "slide-down": "slideDown 0.2s linear",
      "slide-up": "slideUp 0.3s linear"
    },

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

