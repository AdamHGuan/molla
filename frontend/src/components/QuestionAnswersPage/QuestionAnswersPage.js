import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnswers } from "../../store/answers";
import "./QuestionAnswersPage.css";

const QuestionAnswersPage = ({
	question,
	editAnswerId,
	deleteAnswerId,
	setEditAnswerId,
	setDeleteAnswerId,
}) => {
	const answers = useSelector((state) => Object.values(state.answers));

	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user.id);
	// const userAnswers = answers.filter((answer) => answer.ownerId);
	console.log(setEditAnswerId);

	const editableAnswer = user?.id === answers?.editAnswerId?.ownerId;
	const deletableAnswer = user?.id === answers?.editAnswerId?.ownerId;

	useEffect(() => {
		dispatch(getAnswers(question.id));
	}, [dispatch, question.id]);

	return (
		<div className="answersPageContainer">
			{answers.map((answer) => (
				<div key={answer.id} className="answerContainer">
					<div>{answer.answer}</div>
					{editableAnswer && (
						<div>
							<button
								onClick={() => setEditAnswerId(answer.id)}
								className="btn"
							>
								Edit
							</button>
						</div>
					)}
					{deletableAnswer && (
						<div>
							<button
								onClick={() => setDeleteAnswerId(answer.id)}
								className="btn"
							>
								Delete
							</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default QuestionAnswersPage;
