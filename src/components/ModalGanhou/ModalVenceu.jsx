import React from "react";
import ImagemVenceu from "../../assets/personagens-vencedores.png";
import { useState } from "react";

function ModalGanhou({
   setIniciar,
   setVenceu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center">
         <div className="w-1/2 h-2/3 bg-yellow-500 flex items-center justify-center flex-col rounded-3xl">
            <img src={ImagemVenceu} className="w-1/2" />
            <h1>Você ganhou!</h1>
            <button
               onClick={() => {
                  setIniciar(true);
                  setVenceu(false);
                  setQntd(14);
                  setMsg("Você têm apenas 15 tentativas.");
                  geradorNumeroAleatorio();
               }}
               className="bg-fuchsia-500 rounded-md w-32 h-8 m-5 text-white hover:bg-fuchsia-600"
            >
               Voltar
            </button>
         </div>
      </div>
   );
}

export default ModalGanhou;
