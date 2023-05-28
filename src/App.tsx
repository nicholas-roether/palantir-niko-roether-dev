import { JSX } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Home from "./routes/Home";
import Join from "./routes/Join";

function App(): JSX.Element {
	return <Routes>
		<Route path="/" component={Home} />
		<Route path="/join/:joinString" component={Join} />
	</Routes>;
}

export default App;
