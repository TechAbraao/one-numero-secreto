import React from "react";
import { useState } from "react";
import IconsNumbers from "../../components/IconsNumbers/IconsNumbers";
import ModalPerdeu from "../../components/ModalPerdeu/ModalPerdeu";
import ModalVenceu from "../../components/ModalGanhou/ModalVenceu";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
   //
   const [dificuldade, setDificuldade] = useState(15);
   const dataDificuldade = [
      {
         index: 1,
         dificuldadeNome: "Fácil",
      },
      {
         index: 2,
         dificuldadeNome: "Média",
      },
      {
         index: 3,
         dificuldadeNome: "Difícil",
      },
   ];
   //
   const [iniciar, setIniciar] = useState(false);
   const [perdeu, setPerdeu] = useState(false);
   const [venceu, setVenceu] = useState(false);
   const [numeroAleatorio, setNumeroAleatorio] = useState(0);
   const [msg, setMsg] = useState();
   const [intervaloMsg, setIntervaloMsg] = useState(
      "Que a sorte esteja ao seu lado"
   );
   //
   // Define a quantidade de vezes na partida.
   const [qntd, setQntd] = useState(9);
   let descQntd = `Você tem apenas ${qntd + 1} tentativas restantes.`;
   // Lógica magnífica para o refinamento da geração de objetos em JS.
   let dataNumbers = [];
   for (let i = 1; i <= 75; i++) {
      dataNumbers.push({ numero: `${i}`, index: i });
   }
   // Função: selecionar index específico.
   const handleIndex = (index) => {
      //
      index++;
      console.log("Clicou no Index: " + index);
      //
      if (index == numeroAleatorio) {
         setVenceu(true);
      } else if (qntd == 0) {
         setPerdeu(true);
      } else {
         setQntd(qntd - 1);
         setMsg();
      }
   };
   // Função: geradora de número aleatório.
   const geradorNumeroAleatorio = () => {
      let y = parseInt(Math.random() * 75 + 1);
      setNumeroAleatorio(y);
      console.log("Número secreto é: " + y); // Verificar qual é o número aleatório gerado.
      // O número gerado a partir dessa função é retornado, como é mostrado abaixo.
   };

   // Função: verifica se está próximo ou longe do número correto.
   const verificaDistancia = (index) => {
      index++;
      if (index < numeroAleatorio) {
         setIntervaloMsg(`O número correto é maior que ${index}`);
      } else {
         setIntervaloMsg(`O número correto é menor que ${index}`);
      }
   };
   // Função: define a dificuldade escolhida pelo usuário.
   const selecionaDificuldade = (index) => {
      console.log(index);
      if (index == 1) {
         setDificuldade(15);
      } else if (index == 2) {
         setDificuldade(10);
      } else if (index == 3) {
         setDificuldade(5);
      }
   };
   return (
      <>
         <section className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-green-500 to-emerald-500">
            <div className="h-2/3 w-1/2 flex-col flex items-center justify-center rounded-3xl shadow-xl bg-corCard border-4 border-solid border-white-100">
               <h1 className="mb-5 text-4xl text-green-500 font-semibold">
                  {iniciar == false ? "Número da Sorte" : `${intervaloMsg}`}
               </h1>
               <p className="text-center w-3/4 text-xl">
                  {iniciar == false
                     ? `Você terá à sua disposição 75 números, e um deles é o número correto escolhido aleatoriamente. Para vencer o jogo, você precisa acertar o número correto dentro de ${dificuldade} tentativas. Boa sorte!`
                     : ""}
               </p>
               {iniciar == false ? (
                  <div className="flex gap-12 mt-7">
                     {dataDificuldade.map((nivelDificuldade) => (
                        // eslint-disable-next-line react/jsx-key
                        <button
                           className="bg-green-500 rounded-md w-32 h-8 hover:bg-green-600 text-white text-lg"
                           onClick={() =>
                              selecionaDificuldade(nivelDificuldade.index)
                           }
                        >
                           {nivelDificuldade.dificuldadeNome}
                        </button>
                     ))}
                  </div>
               ) : (
                  ""
               )}
               <button
                  className="bg-green-500 rounded-md w-32 h-8 m-5 hover:bg-green-600 text-white text-lg"
                  onClick={() => {
                     setIniciar(!iniciar); // Inicializa a partida.
                     geradorNumeroAleatorio(); // Invoca a função de inicialização com a lógica de execução.
                     if (iniciar == false) {
                        setQntd(dificuldade - 1);
                        setMsg(descQntd);
                        setIntervaloMsg("Será que hoje é o seu dia de sorte?");
                     }
                  }}
               >
                  {iniciar == false ? "Iniciar" : "Voltar"}
               </button>
               <AnimatePresence>
                  {iniciar && (
                     <>
                        <motion.div
                           className="w-full"
                           key="content"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 1 }}
                        >
                           <ul className="flex flex-wrap items-center justify-center cursor-pointer focus:outline-none">
                              {dataNumbers.map(
                                 (numeroSelecionado, indexSelecionado) => (
                                    <li
                                       key={indexSelecionado.index}
                                       onClick={() => {
                                          handleIndex(indexSelecionado);
                                          verificaDistancia(indexSelecionado);
                                       }}
                                    >
                                       <IconsNumbers
                                          numeroSelecionado={
                                             numeroSelecionado.numero
                                          }
                                       />
                                    </li>
                                 )
                              )}
                           </ul>
                        </motion.div>
                        <div className="bg-green-500 w-2/3 h-14 mt-7 flex justify-center items-center rounded-lg ">
                           <h1 className="text-2xl text-white font-bold">
                              {descQntd}
                           </h1>
                        </div>
                        {/*
                         *  <h1 className="text-2xl">{`Número aleatório é: ${numeroAleatorio}`}</h1>
                         */}
                     </>
                  )}
               </AnimatePresence>
            </div>
            {perdeu && (
               <ModalPerdeu
                  setIniciar={setIniciar}
                  setPerdeu={setPerdeu}
                  setQntd={setQntd}
                  setMsg={setMsg}
                  geradorNumeroAleatorio={geradorNumeroAleatorio}
                  descQntd={descQntd}
                  numeroAleatorio={numeroAleatorio}
                  setIntervaloMsg={setIntervaloMsg}
                  dificuldade={dificuldade}
               />
            )}
            {venceu && (
               <ModalVenceu
                  setIniciar={setIniciar}
                  setVenceu={setVenceu}
                  setQntd={setQntd}
                  setMsg={setMsg}
                  geradorNumeroAleatorio={geradorNumeroAleatorio}
                  descQntd={descQntd}
                  setIntervaloMsg={setIntervaloMsg}
                  dificuldade={dificuldade}
               />
            )}
         </section>
      </>
   );
}
