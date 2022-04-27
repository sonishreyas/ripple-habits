import React from "react";
import ReactDOM from "react-dom";
import "react-calendar/dist/Calendar.css";
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
	CategoryProvider,
	ArchiveProvider,
} from "./context";
import { NotesProvider } from "./context/notes-context";
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
									<CategoryProvider>
										<ArchiveProvider>
											<ProfileProvider>
												<NotesProvider>
													<App />
												</NotesProvider>
											</ProfileProvider>
										</ArchiveProvider>
									</CategoryProvider>
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
