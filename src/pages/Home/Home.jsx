import React from "react";
import { useState } from "react";
import IconsNumbers from "../../components/IconsNumbers/IconsNumbers";
import ModalPerdeu from "../../components/ModalPerdeu/ModalPerdeu";
import ModalVenceu from "../../components/ModalGanhou/ModalVenceu";

export default function Home() {
   const [iniciar, setIniciar] = useState(false);
   const [perdeu, setPerdeu] = useState(false);
   const [venceu, setVenceu] = useState(false);
   const [numeroAleatorio, setNumeroAleatorio] = useState(0);
   const [msg, setMsg] = useState();
   // Define a quantidade de vezes na partida.
   const [qntd, setQntd] = useState(19);
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
   // Função: geradora de número aleatório
   const geradorNumeroAleatorio = () => {
      let y = parseInt(Math.random() * 75 + 1);
      setNumeroAleatorio(y);
      console.log("Número secreto é: " + y); // Verificar qual é o número aleatório gerado.
      // O número gerado a partir dessa função é retornado, como é mostrado abaixo.
   };

   //
   return (
      <>
         <section className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="h-2/3 w-1/2 flex-col flex items-center justify-center rounded-3xl shadow-xl bg-corCard border-4 border-solid border-white-100">
               <h1 className="mb-5 text-5xl text-zinc-700 font-semibold">
                  {iniciar == false
                     ? "Acerte o Número Secreto"
                     : "Que a sorte esteja ao seu lado"}
               </h1>
               <p className="text-center w-3/4 text-xl">
                  {iniciar == false
                     ? "Você terá à sua disposição 75 números, e um deles é o número correto escolhido aleatoriamente. Para vencer o jogo, você precisa acertar o número correto dentro de 20 tentativas. Boa sorte!"
                     : ""}
               </p>
               <button
                  className="bg-zinc-700 rounded-md w-32 h-8 m-5 hover:bg-zinc-900 text-white text-lg"
                  onClick={() => {
                     setIniciar(!iniciar); // Inicializa a partida.
                     geradorNumeroAleatorio(); // Invoca a função de inicialização com a lógica de execução.
                     if (iniciar == false) {
                        setQntd(19);
                        setMsg(descQntd);
                     }
                  }}
               >
                  {iniciar == false ? "Iniciar" : "Voltar"}
               </button>

               {iniciar && (
                  <>
                     <div className="w-full">
                        <ul className="flex flex-wrap items-center justify-center cursor-pointer focus:outline-none">
                           {dataNumbers.map(
                              (numeroSelecionado, indexSelecionado) => (
                                 <li
                                    key={indexSelecionado.index}
                                    onClick={() =>
                                       handleIndex(indexSelecionado)
                                    }
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
                     </div>
                     <div className="bg-zinc-700 w-2/3 h-14 mt-7 flex justify-center items-center rounded-lg ">
                        <h1 className="text-2xl text-white font-bold">
                           {descQntd}
                        </h1>
                     </div>
                     {/*
                      *  <h1 className="text-2xl">{`Número aleatório é: ${numeroAleatorio}`}</h1>
                      */}
                  </>
               )}
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
               />
            )}
         </section>
      </>
   );
}
