import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { getQuestions } from "../../store/questions";
// import styles from "./QuestionsContainer.module.css";

const QuestionsContainer = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));

	useEffect(() => {
		dispatch(getQuestions());
	}, [dispatch]);

	return (
		<div>
			{questions.map((question) => (
				<NavLink key={question.id} to={`/questions/${question.id}`}>
					<p> {question.title} </p>
				</NavLink>
			))}
		</div>
	);
};

export default QuestionsContainer;
