import React from "react";
import "./homeStyle.css";
import { useState } from "react";
import IconsNumbers from "../../components/IconsNumbers/IconsNumbers";

export default function Home() {
   const [iniciar, setIniciar] = useState(false);

   // Lógica magnífica para o refinamento da geração de números.
   let dataNumbers = [];
   for (let i = 1; i <= 75; i++) {
      dataNumbers.push({ numero: i });
   }
   //
   return (
      <>
         <section className="w-full h-screen bg-slate-300 flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-red-400 flex-col flex items-center justify-start">
               <button
                  className="bg-fuchsia-500 rounded-md w-32 h-8 m-5 text-white hover:bg-fuchsia-600"
                  onClick={() => setIniciar(!iniciar)}
               >
                  {iniciar == false ? "Iniciar" : "Voltar"}
               </button>
               {iniciar && (
                  <>
                     <div className="w-full">
                        <ul className="flex flex-wrap items-center justify-center mt-1">
                           {dataNumbers.map((numeroSelecionado) => (
                              <li>
                                 <IconsNumbers
                                    numeroSelecionado={numeroSelecionado.numero}
                                 />
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="bg-white w-96 h-10 mt-10 flex justify-center items-center rounded-lg">
                        <h1 className="text-2xl">Hello, World!</h1>
                     </div>
                  </>
               )}
            </div>
         </section>
      </>
   );
}
