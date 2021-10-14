import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getQuestions } from "../../store/questions";

import "./QuestionsContainer.css";

const QuestionsContainer = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));

	useEffect(() => {
		dispatch(getQuestions());
	}, [dispatch]);

	return (
		<div className="mainQuestionscontainer">
			<div className="questionsLeftContainer"></div>
			<div className="questionsCenterContainer">
				{questions.map((question) => (
					<>
						<Link key={question.id} to={`/questions/${question.id}`}>
							<div className="questionsLinks">
								<p> {question.title} </p>
							</div>
						</Link>
					</>
				))}
			</div>
			<div className="questionsLeftContainer"></div>
		</div>
	);
};

export default QuestionsContainer;
