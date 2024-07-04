import React from "react";
import { useState } from "react";

function ModalGanhou({
   setIniciar,
   setVenceu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
   descQntd,
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center bg-black bg-opacity-25 ">
         <div className="w-1/2 h-2/3 bg-corCard flex items-center justify-center flex-col rounded-3xl border-4 border-solid border-white-100">
         <h1 className="text-5xl font-bold m-3 text-zinc-700">VENCEU!</h1>
         <p className="text-zinc-700 text-xl">Parabéns, você acertou o número secreto.</p>
            <button
               onClick={() => {
                  setIniciar(true);
                  setVenceu(false);
                  setQntd(19);
                  setMsg(descQntd);
                  geradorNumeroAleatorio();
               }}
               className="bg-zinc-700 hover:bg-zinc-900 rounded-md w-32 h-8 m-5 text-white"
            >
               Voltar
            </button>
         </div>
      </div>
   );
}

export default ModalGanhou;
