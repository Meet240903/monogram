import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWork from "./components/HowItWork";
import Download from "./components/Download";
import Blog from "./components/Blog";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route exact path="/howitwork" element={<HowItWork />} />
					<Route exact path="/download" element={<Download />} />
					<Route exact path="/blog" element={<Blog />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
