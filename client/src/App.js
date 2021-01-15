import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./icon.png";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Project from "./Pages/Projects";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/projects">
					<Project />
				</Route>

				<Route exact path="/contact">
					<Contact />
				</Route>

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
