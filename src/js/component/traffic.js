import React, { useState } from "react";

const Traffic = e => {
	let [active, setActive] = useState("");
	let change = e => {
		setActive((active += " active"));
		e.target.className += active;
		setInterval(() => {
			//we are thinking what to change here to quit about the active class
		}, 3000);
	};
	const quit = e => {
		e.target.className = e.target.className - active;
	};
	return (
		<div>
			<div className="holder"></div>
			<div className="lights">
				<div
					// onMouseLeave={quit}
					onClick={change}
					className={`light red`}></div>
				<div
					// onMouseLeave={quit}
					onClick={change}
					className={`light yellow`}></div>
				<div
					// onMouseLeave={quit}
					onClick={change}
					className={`light green`}></div>
			</div>
		</div>
	);
};

export default Traffic;
