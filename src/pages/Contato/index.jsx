import ChangeCounter from "../../components/ChangeCounter";

import { useCounterContext } from "../../hooks/useCounterCotext";

const Contato = () => {
   const { counter } = useCounterContext();

   return (
      <div>
         <h1>Contato</h1>
         <p>Valor do contador: {counter}</p>
         {/* 3 - alterando valor contexto */}
         <ChangeCounter />
		</div>
   )
}
export default Contato;