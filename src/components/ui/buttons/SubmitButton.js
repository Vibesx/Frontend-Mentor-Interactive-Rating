import React from "react";

import classes from "./SubmitButton.module.scss";

function SubmitButton(props) {
	return (
		<button className={classes.button} onClick={props.onClickHandler}>
			SUBMIT
		</button>
	);
}

export default SubmitButton;
