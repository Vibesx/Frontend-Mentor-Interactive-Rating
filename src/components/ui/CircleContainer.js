import React from "react";

import classes from "./CircleContainer.module.scss";

function CircleContainer(props) {
	return (
		<div
			className={`${classes.container} ${
				props.hoverable ? classes.hoverable : ""
			} ${props.selected ? classes.selected : ""}`}
			onClick={props.onClickHandler}
		>
			{props.children}
		</div>
	);
}

export default CircleContainer;
