/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

   colors : {
     primaryColor : "#059D55",
    //  secondaryColor : "#",
     textColor : "#656565",
     darkMode : "#191A26",
     darkModeText : "#A3A3A8"
   },

   fontFamily : {
    "primaryFont" : ['suse', 'sans-serif']
   }


    },
  },
  plugins: [],
}