import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnswers } from "../../store/answers";
import "./QuestionAnswersPage.css";

const QuestionAnswersPage = ({ question, setEditAnswerId }) => {
	const answers = useSelector((state) => Object.values(state.answers));

	const dispatch = useDispatch();
	// const answers = useSelector((state) => Object.values(state.answers));

	// const editable = user?.id === answers.answer?.ownerId;

	useEffect(() => {
		dispatch(getAnswers(question.id));
	}, [dispatch, question.id]);

	return (
		<div className="answersPageContainer">
			{answers.map((answer) => (
				<div key={answer.id} className="answerContainer">
					<div>{answer.answer}</div>
					<div>
						<button onClick={() => setEditAnswerId(answer.id)} className="btn">
							Edit
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default QuestionAnswersPage;
