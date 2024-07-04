/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            corCard: "#F5F5F5",
            corBackground: "#EADAD8",
            corBackgroundOther: "#F3C6C0",
            corTexto: "#DB2423",
            corTextoHover: "#C60506",
         },
      },
   },
   plugins: [],
};
