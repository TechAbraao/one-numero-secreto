import React from "react";
import "./homeStyle.css";
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
   const [qntd, setQntd] = useState(14);

   // Lógica magnífica para o refinamento da geração de objetos em JS.
   let dataNumbers = [];
   for (let i = 1; i <= 75; i++) {
      dataNumbers.push({ numero: `${i}`, index: i });
   }
   // Função: selecionar index específico.
   const handleIndex = (index) => {
      index++;
      console.log("Clicou no Index: " + index);

      if (index == numeroAleatorio) {
         setVenceu(true);
      } else if (qntd == 0) {
         setPerdeu(true);
      } else {
         setQntd(qntd - 1);
         setMsg(`Você têm apenas ${qntd} tentativas.`);
      }
   };
   // Função: geradora de número aleatório
   const geradorNumeroAleatorio = () => {
      let y = parseInt(Math.random() * 75 + 1);
      setNumeroAleatorio(y);
      console.log("Número secreto é: " + y + ", correto?"); // Verificar qual é o número aleatório gerado.
      // O número gerado a partir dessa função é retornado, como é mostrado abaixo.
   };

   //
   return (
      <>
         <section className="w-full h-screen bg-slate-300 flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-red-400 flex-col flex items-center justify-start">
               <button
                  className="bg-fuchsia-500 rounded-md w-32 h-8 m-5 text-white hover:bg-fuchsia-600"
                  onClick={() => {
                     setIniciar(!iniciar); // Inicializa a partida.
                     geradorNumeroAleatorio(); // Invoca a função de inicialização com a lógica de execução.
                     if (iniciar == false) {
                        setQntd(14);
                        setMsg("Você têm apenas 15 tentativas.");
                     }
                  }}
               >
                  {iniciar == false ? "Iniciar" : "Voltar"}
               </button>

               {iniciar && (
                  <>
                     <div className="w-full">
                        <ul className="flex flex-wrap items-center justify-center mt-1 cursor-pointer">
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
                     <div className="bg-white w-2/3 h-14 mt-7 flex justify-center items-center rounded-lg">
                        <h1 className="text-2xl">{msg}</h1>
                     </div>
                     <h1 className="text-2xl">{`Número aleatório é: ${numeroAleatorio}`}</h1>
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
               />
            )}
            {venceu && (
               <ModalVenceu
                  setIniciar={setIniciar}
                  setVenceu={setVenceu}
                  setQntd={setQntd}
                  setMsg={setMsg}
                  geradorNumeroAleatorio={geradorNumeroAleatorio}
               />
            )}
         </section>
      </>
   );
}
