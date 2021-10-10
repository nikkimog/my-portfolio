// import logo from "./logo.svg";
import "./App.scss";
import Navibar from "./components/Navibar";
import { Route } from "react-router-dom";
import Linda from "./pages/Linda";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

function App() {
	return (
		<div>
			<Navibar />
			<div id="app">
				<Route exact path="/Linda" component={Linda} />
				<Route exact path="/" component={Home} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/aboutme" component={AboutMe} />

				{/* <div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div> */}
			</div>
		</div>
	);
}

export default App;
