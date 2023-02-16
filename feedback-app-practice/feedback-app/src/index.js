import React from "react";
import ReactDOM from "react-dom/client"; // Allow for interaction with DOM in the browser
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
