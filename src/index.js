import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
	NavbarProvider,
	ThemeProvider,
	RegisterProvider,
	LoginProvider,
	AuthProvider,
	ProfileProvider,
	HabitsProvider,
} from "./context";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<NavbarProvider>
					<RegisterProvider>
						<LoginProvider>
							<AuthProvider>
								<HabitsProvider>
									<ProfileProvider>
										<App />
									</ProfileProvider>
								</HabitsProvider>
							</AuthProvider>
						</LoginProvider>
					</RegisterProvider>
				</NavbarProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
