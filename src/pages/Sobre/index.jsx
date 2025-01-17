import { useContext } from "react";
import ChangeCounter from "../../components/ChangeCounter";
import { CounterContext } from "../../context/CounterContext";

const Sobre = () => {
	const { counter } = useContext(CounterContext);

	return (
		<div>
			<h1>Sobre</h1>
			<p>Valor do contador: {counter}</p>
			{/* 3 - alterando valor contexto */}
			<ChangeCounter />
		</div>
	);
};
export default Sobre;
