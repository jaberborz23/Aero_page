/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   maxWidth :{
    "container" : "1360px"
   },
   


    },
   
      screens: {
        xxxs: "180px",
      xxs: "300px",  
      xs: "480px",
      sm :"640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px"
       
      }
      , backgroundColor :{
        "or": "rgba(234, 88, 12, 1)",
        "pn" : "rgba(250, 208, 188, 1)"

      },
      colors :{
        "bl" : "rgba(11, 11, 11, 1)",
        "wh" : "rgba(255, 255, 255, 1)",
        "bla" : "rgba(9, 9, 11, 1)",
        "gr" : "rgba(113, 113, 122, 1)"
       

      },
      fontFamily :{
        "ab" : '"ABeeZee" , "sans-serif"',
        're' : '"REM" , "sans-serif" ',
        "rb" : "  'Roboto' , 'sans-serif' "
      }
    
  },
  
  plugins: [],
}

