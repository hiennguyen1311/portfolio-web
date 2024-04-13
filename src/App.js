import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./portfolio/screens/Home/Home";
import Navbar from "./portfolio/components/Navbar/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
