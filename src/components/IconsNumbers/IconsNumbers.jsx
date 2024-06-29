import React from "react";
import { useCallback } from "react";

function IconsNumbers({ numeroSelecionado }) {

   const randomColors = useCallback(() => {
      const hue = Math.floor(Math.random() * 360);
      const lightness = `hsl(${hue}, 100%, 95%)`;
      const darkness = `hsl(${hue}, 100%, 20%)`;
      return { lightness, darkness };

   }, []);
   return (
      <div
         className="bg-white w-14 h-14 flex justify-center items-center rounded shadow-lg m-0.5
       hover:bg-green-500 hover:scale-90 hover:duration-500" style={{backgroundColor: randomColors().lightness}}
      >
         <p className="text-2xl hover:duration-500">{numeroSelecionado}</p>
      </div>
   );
}

export default IconsNumbers;
