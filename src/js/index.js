//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));

function Trafficlight() {
	const [color, setcolor] = useState("red");
	return (
		<ul className="trafficl">
			<li className="red"> red </li>

			<li className="yellow">yellow</li>
			<li className="green">green</li>
		</ul>
	);
}
