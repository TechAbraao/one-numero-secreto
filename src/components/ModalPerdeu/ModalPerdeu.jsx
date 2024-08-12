
import { motion } from "framer-motion";
function ModalPerdeu({
   setIniciar,
   setPerdeu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
   descQntd,
   numeroAleatorio,
   setIntervaloMsg,
   dificuldade
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center bg-black bg-opacity-25">
         <motion.div
            className="s380:w-72 s380:h-56 flex items-center justify-center flex-col bg-corCard border-4 border-solid border-white-100"
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
         >
            <h1 className="text-4xl font-bold m-3 text-zinc-700">PERDEU!</h1>
            <p className="text-zinc-700 text-xl text-center">
               A resposta correta é {numeroAleatorio}. Infelizmente, você
               perdeu.
            </p>
            <button
               className="bg-green-500 border-2 border-green-700  hover:bg-green-600 w-32 h-8 m-5 text-white"
               onClick={() => {
                  setIniciar(true);
                  setPerdeu(false);
                  setQntd(dificuldade - 1);
                  setMsg(descQntd);
                  geradorNumeroAleatorio();
                  setIntervaloMsg("Você não deve ter tanta sorte assim!");
               }}
            >
               Voltar
            </button>
         </motion.div>
      </div>
   );
}

export default ModalPerdeu;
