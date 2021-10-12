import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getQuestions } from "../../store/questions";
// import styles from "./QuestionsContainer.module.css";

const QuestionsContainer = () => {
	// Declare variables from hooks
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));

	// Use a 'react' hook and cause a side effect
	useEffect(() => {
		dispatch(getQuestions());
	}, [dispatch]);

	return (
		<div>
			<ul>
				<li>
					{questions.map((question) => (
						<div>{question.title}</div>
					))}
				</li>
			</ul>
		</div>
	);
};

export default QuestionsContainer;
