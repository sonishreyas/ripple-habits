import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { Header, Footer } from "./components";
function App() {
	return (
		<div className="grid-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
