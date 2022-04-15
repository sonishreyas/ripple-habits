import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { Home, Authentication, Habits, Profile } from "./pages";
import { Header, Footer, NavBar } from "./components";
import { useNavbar } from "./context";
import { RequireAuth } from "./utils";
function App() {
	const { showNavbar } = useNavbar();
	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/auth" element={<Authentication />} />
				<Route
					path="/habits"
					element={
						<RequireAuth>
							<Habits />
						</RequireAuth>
					}
				/>
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
			</Routes>
			<Outlet />
			{showNavbar && <NavBar />}
			<Footer />
		</div>
	);
}

export default App;
