import React, { useState } from "react";

const Traffic = e => {
	let [active, setActive] = useState("");
	let change = e => {
		setActive((active += " active"));
		e.target.className += active;
	};
	const quit = e => {
		let array = e.target.className.split(" ");
		let newClass = array[0] + " " + array[1];
		e.target.className = newClass;
	};
	return (
		<div>
			<div className="holder"></div>
			<div className="lights">
				<div
					onMouseLeave={quit}
					onClick={change}
					className={`light red`}></div>
				<div
					onMouseLeave={quit}
					onClick={change}
					className={`light yellow`}></div>
				<div
					onMouseLeave={quit}
					onClick={change}
					className={`light green`}></div>
			</div>
		</div>
	);
};

export default Traffic;
