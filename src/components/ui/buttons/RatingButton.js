import React from "react";

import classes from "./RatingButton.module.scss";

import CircleContainer from "../CircleContainer";

function RatingButton(props) {
	const selected = props.ratingValue === props.selectedValue;
	return (
		<CircleContainer
			hoverable={true}
			onClickHandler={props.onClickHandler.bind(null, props.ratingValue)}
			selected={selected}
		>
			<p className={classes.ratingValue}>{props.ratingValue}</p>
		</CircleContainer>
	);
}

export default RatingButton;
