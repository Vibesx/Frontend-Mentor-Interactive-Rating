import React, { useState } from "react";

import classes from "./Rating.module.scss";

import Card from "../ui/Card";
import Logo from "../ui/Logo";
import RatingButton from "../ui/buttons/RatingButton";
import SubmitButton from "../ui/buttons/SubmitButton";

function Rating(props) {
	const [selectedValue, setSelectedValue] = useState("");
	const ratings = [1, 2, 3, 4, 5];

	const selectValueHandler = (value) => {
		setSelectedValue(value);
	};

	return (
		<Card>
			<div className={classes.container}>
				<Logo></Logo>
				<div className={classes.textContainer}>
					<h3 className={classes.ratingHeader}>How did we do?</h3>
					<p className={classes.ratingDesc}>
						Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!
					</p>
				</div>
				<div className={classes.ratings}>
					{ratings.map((rating) => (
						<RatingButton
							key={rating}
							ratingValue={rating}
							selectedValue={selectedValue}
							onClickHandler={selectValueHandler}
						></RatingButton>
					))}
				</div>
				<SubmitButton
					onClickHandler={props.onSubmitHandler.bind(
						null,
						selectedValue
					)}
				></SubmitButton>
			</div>
		</Card>
	);
}

export default Rating;
