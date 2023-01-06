import React from "react";

import classes from "./Thanks.module.scss";
import image from "../../assets/illustration-thank-you.svg";

import Card from "../ui/Card";

function Thanks(props) {
	return (
		<Card>
			<div className={classes.thanks}>
				<img
					src={image}
					alt="Thank you"
					className={classes.thankYouImage}
				/>
				<div className={classes.ratingContainer}>
					<p>{`You selected ${props.ratingValue} out of 5`}</p>
				</div>
				<div className={classes.thankYouTextContainer}>
					<h3>Thank you!</h3>
					<p>
						We appreciate you taking the time to give a rating. If
						you ever need more support, don't hesitate to get in
						touch!
					</p>
				</div>
			</div>
		</Card>
	);
}

export default Thanks;
