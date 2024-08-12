import React from "react";
import { useCallback } from "react";

function IconsNumbers({ numeroSelecionado, numeroAleatorio }) {
   //
   return (
      <div
         className="bg-stone-300 flex justify-center items-center rounded m-0.5 hover:bg-zinc-600 hover:text-green-300 s380:w-8 s380:text-xl s380:h-8 s430:w-9 s430:h-9 s430:text-xl s830:w-10 s830:h-10 s830:text-2xl s1030:w-8 s1030:h-8 s1030:text-xl"
      >
         <p className="hover:duration-500">{numeroSelecionado}</p>
      </div>
   );
}

export default IconsNumbers;
