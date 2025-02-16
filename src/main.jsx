import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CounterContextProvider } from "./context/CounterContext/index.jsx";
import { TitleColorContextProvider } from "./context/TitleColorContext/index.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* 2 - Criando o provider, para que ele renderize o App como children */}
		<CounterContextProvider>
			<TitleColorContextProvider>
				<App />
			</TitleColorContextProvider>
		</CounterContextProvider>
	</StrictMode>
);
