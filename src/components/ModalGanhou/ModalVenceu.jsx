import React from "react";
import { motion } from "framer-motion";
function ModalGanhou({
   setIniciar,
   setVenceu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
   descQntd,
   setIntervaloMsg,
   dificuldade
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center bg-black bg-opacity-25 ">
         <motion.div
            className="s380:w-72 s380:h-56 bg-corCard flex items-center justify-center flex-col border-4 border-solid border-white-100"
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
         >
            <h1 className="text-4xl font-bold m-3 text-zinc-700">VENCEU!</h1>
            <p className="text-zinc-700 text-xl text-center">
               Parabéns, você acertou o número secreto.
            </p>
            <button
               onClick={() => {
                  setIniciar(true);
                  setVenceu(false);
                  setQntd(dificuldade - 1);
                  setMsg(descQntd);
                  geradorNumeroAleatorio();
                  setIntervaloMsg("Você é realmente sortudo!");
               }}
               className="bg-green-500 border-2 border-green-700 hover:bg-green-600  w-32 h-8 m-5 text-white"
            >
               Voltar
            </button>
         </motion.div>
      </div>
   );
}

export default ModalGanhou;
