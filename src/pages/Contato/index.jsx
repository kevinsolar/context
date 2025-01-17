import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import ChangeCounter from "../../components/ChangeCounter";

const Contato = () => {
   const { counter } = useContext(CounterContext);

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