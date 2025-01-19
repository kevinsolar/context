import ChangeCounter from "../../components/ChangeCounter";

import { useCounterContext } from "../../hooks/useCounterCotext";

const Sobre = () => {
	// const { counter } = useContext(CounterContext);
	const { counter } = useCounterContext();

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
