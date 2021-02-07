import React from "react";

//include images into your bundle
import TrafficLight from "./traffic.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<TrafficLight />
		</div>
	);
}
