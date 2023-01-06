import { useState } from "react";

import classes from "./App.module.scss";

import Rating from "./components/rating/Rating";
import Thanks from "./components/thanks/Thanks";

function App(props) {
	const [submitted, setSubmitted] = useState(false);
	const [submittedValue, setsubmittedValue] = useState("");
	const submitHandler = (submittedValue) => {
		setSubmitted(true);
		setsubmittedValue(submittedValue);

		// simulating a "back" action to go back to the Rating page
		setTimeout(() => {
			setSubmitted(false);
		}, 5000);
	};
	return (
		<div className={classes.app}>
			{!submitted ? (
				<Rating onSubmitHandler={submitHandler}></Rating>
			) : (
				<Thanks ratingValue={submittedValue}></Thanks>
			)}
		</div>
	);
}

export default App;
