import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarProvider, ThemeProvider } from "./context";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<NavbarProvider>
					<App />
				</NavbarProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
