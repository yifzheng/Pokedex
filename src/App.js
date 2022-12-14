import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes/routes";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes />
			</Router>
		</div>
	);
}

export default App;
