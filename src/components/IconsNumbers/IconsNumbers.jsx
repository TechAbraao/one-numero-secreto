import React from "react";
import { useCallback } from "react";

function IconsNumbers({ numeroSelecionado, numeroAleatorio }) {
   const randomColors = useCallback(() => {
      const hue = Math.floor(Math.random() * 360);
      const lightness = `hsl(${hue}, 85%, 95%)`;
      const darkness = `hsl(${hue}, 100%, 20%)`;
      return { lightness, darkness };
   }, []);
   //
   const indexSelect = useCallback(() => {
      if (numeroSelecionado != numeroAleatorio) {
         const errouNumero = `red`;
         return { errouNumero };
      }
   });
   return (
      <div
         className={`bg-stone-300 w-14 h-14 flex justify-center items-center rounded m-0.5 hover:bg-zinc-700 hover:text-white
       `}
      >
         <p className="text-3xl hover:duration-500">{numeroSelecionado}</p>
      </div>
   );
}

export default IconsNumbers;
