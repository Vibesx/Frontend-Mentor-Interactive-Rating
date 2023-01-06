import React from "react";

import classes from "./Logo.module.scss";

import iconStar from "../../assets/icon-star.svg";

import CircleContainer from "./CircleContainer";

function Logo() {
	return (
		<CircleContainer hoverable={false}>
			<img src={iconStar} alt="Star icon" className={classes.starLogo} />
		</CircleContainer>
	);
}

export default Logo;
