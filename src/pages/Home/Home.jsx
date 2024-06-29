import React from "react";
import "./homeStyle.css";
import { useState } from "react";
import IconsNumbers from "../../components/IconsNumbers/IconsNumbers";

export default function Home({}) {
   const [iniciar, setIniciar] = useState(false);
   const [numeroAleatorio, setNumeroAleatorio] = useState(0);
   const [msg, setMsg] = useState("");

   // Lógica magnífica para o refinamento da geração de objetos em JS.
   let dataNumbers = [];
   for (let i = 1; i <= 75; i++) {
      dataNumbers.push({ numero: `${i}`, index: i });
      console.log(`O index é: ${i}`);
   }
   // Principais funções

   // Função: selecionar index específico.
   const handleIndex = (index) => {
      index++;
      console.log("Clicou no Index: " + index);
      if (index == numeroAleatorio) {
         console.log("Parabéns, você venceu. Orgulhe-se.");
         setMsg("Parabéns, você venceu. Orgulhe-se.");
      } else {
         console.log("Infelizmente não foi dessa vez.");
         setMsg("Infelizmente não foi dessa vez.");
      }
   };
   // Função: geradora de número aleatório
   const geradorNumeroAleatorio = () => {
      if (iniciar) {
         console.log("Número gerado anteriormente inválidado"); // Notifica que o número gerado foi invalidado.
      } else {
         let y = parseInt(Math.random() * 75 + 1);
         setNumeroAleatorio(y);
         console.log("Número secreto é: " + y + ", correto?"); // Verificar qual é o número aleatório gerado.
         // O número gerado a partir dessa função é retornado, como é mostrado abaixo.
      }
   };
   //

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
                  }}
               >
                  {iniciar == false ? "Iniciar" : "Voltar"}
               </button>

               {iniciar && (
                  <>
                     <div className="w-full">
                        <ul className="flex flex-wrap items-center justify-center mt-1">
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
                     <div className="bg-white w-96 h-10 mt-10 flex justify-center items-center rounded-lg">
                        <h1 className="text-2xl">{`Número aleatório é: ${numeroAleatorio}`}</h1>
                     </div>
                     <h1>Resultado: {msg}</h1>
                  </>
               )}
            </div>
         </section>
      </>
   );
}
