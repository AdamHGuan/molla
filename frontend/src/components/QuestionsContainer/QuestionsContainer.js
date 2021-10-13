import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useParams } from "react-router";

import { getQuestions } from "../../store/questions";
// import { getOneQuestion } from "../../store/questions";

import "./QuestionsContainer.css";

const QuestionsContainer = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));
	// const { id } = useParams();

	useEffect(() => {
		dispatch(getQuestions());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(getOneQuestion(id));
	// }, [dispatch]);

	return (
		<div className="mainQuestionscontainer">
			{questions.map((question) => (
				<div className="questionsContainer" key={question.id}>
					<Link to={`/questions/${question.id}`}>
						<p> {question.title} </p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default QuestionsContainer;
