import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
			<ul>
				{questions.map((question) => (
					<li key={question.id}>
						<div>
							<p> {question.title} </p>
							<p> {question.description} </p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default QuestionsContainer;
