import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { Header, Footer, NavBar } from "./components";
import { useNavbar } from "./context";
function App() {
	const { showNavbar } = useNavbar();
	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
			<Outlet />
			{showNavbar && <NavBar />}
			<Footer />
		</div>
	);
}

export default App;
