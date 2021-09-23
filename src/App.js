import logo from "./logo.svg";
import "./App.css";
import Navibar from "./components/Navibar";
import { Route } from "react-router-dom";
import Linda from "./pages/Linda";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Navibar />
			<Route exact path="/Linda" component={Linda} />
			<Route exact path="/" component={Home} />
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
	);
}

export default App;
