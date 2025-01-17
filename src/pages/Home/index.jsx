import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

const Home = () => {
	const { counter } = useContext(CounterContext);

   console.log(counter)

	return (
		<div>
			<h1>Home</h1>
			<p>Valor do contador: {counter}</p>
		</div>
	);
};
export default Home;
