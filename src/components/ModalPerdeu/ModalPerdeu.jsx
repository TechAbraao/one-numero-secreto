import React from "react";
import ImagemPerdeu from "../../assets/personagens-perdedores.png";

function ModalPerdeu({
   setIniciar,
   setPerdeu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center">
         <div className="w-1/2 h-2/3 flex items-center justify-center flex-col rounded-3xl bg-red-500">
            <img src={ImagemPerdeu} className="w-1/2" />
            <h1>Você perdeu!</h1>
            <button
               className="bg-fuchsia-500 rounded-md w-32 h-8 m-5 text-white hover:bg-fuchsia-600"
               onClick={() => {
                  setIniciar(true);
                  setPerdeu(false);
                  setQntd(14);
                  setMsg("Você têm apenas 15 tentativas.");
                  geradorNumeroAleatorio();
               }}
            >
               Voltar
            </button>
         </div>
      </div>
   );
}

export default ModalPerdeu;
