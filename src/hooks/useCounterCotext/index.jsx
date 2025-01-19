import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

// 4 - Criar hook de contexto
export const useCounterContext = () => {
   const context = useContext(CounterContext);

   if (!context) {
      console.log("Contexto nao econtrado");
   }

   return context;
};