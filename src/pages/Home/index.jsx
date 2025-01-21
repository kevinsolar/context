// import { useContext } from "react";
import ChangeCounter from "../../components/ChangeCounter";
// import { CounterContext } from "../../context/CounterContext";

// 4 - refatorando o hook de contexto
import { useCounterContext } from "../../hooks/useCounterCotext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Home = () => {
	// const { counter } = useContext(CounterContext);
	const { counter } = useCounterContext();//-> mesma coisa, mas utilizando o hook

   // 5 - contexto mais complexo
   const {color} = useTitleColorContext();

	return (
		<div>
			<h1 style={{color: color}}>Home</h1>
			<p>Valor do contador: {counter}</p>
         {/* 3 - alterando valor contexto */}
         <ChangeCounter />
		</div>
	);
};
export default Home;
