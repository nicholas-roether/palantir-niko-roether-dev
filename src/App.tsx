import { JSX } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Home from "./Home";
import Join from "./Join";

function App(): JSX.Element {
	return <Routes>
		<Route path="/" component={Home} />
		<Route path="/join/:joinString" component={Join} />
	</Routes>;
}

export default App;
