import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnswers } from "../../store/answers";
import "./QuestionAnswersPage.css";

const QuestionAnswersPage = ({
	question,
	// editAnswerId,
	// deleteAnswerId,
	setEditAnswerId,
	setDeleteAnswerId,
}) => {
	const user = useSelector((state) => state.session.user);

	const answers = useSelector((state) => Object.values(state.answers));

	const dispatch = useDispatch();
	// const user = useSelector((state) => state.session.user);
	// const userAnswers = answers.filter((answer) => answer.ownerId);

	// const editableAnswer = user?.id === answers[editAnswerId]?.ownerId;
	// const deletableAnswer = user?.id === answers[deleteAnswerId]?.ownerId;

	useEffect(() => {
		dispatch(getAnswers(question.id));
	}, [dispatch, question.id]);

	return (
		<div className="answersPageContainer">
			{answers.map((answer) => (
				<div key={answer.id} className="answerContainer">
					<div className="answer"> {answer.answer}</div>
					{/* {user.id === answer.ownerId && (
						<div>
							<button
								onClick={() => setEditAnswerId(answer.id)}
								className="btn"
							>
								Edit
							</button>
						</div>
					)}
					{user.id === answer.ownerId && (
						<div>
							<button
								onClick={() => setDeleteAnswerId(answer.id)}
								className="btn"
							>
								Delete
							</button>
						</div>
					)} */}
					{user && user.id === answer.ownerId && (
						<>
							<div>
								<button
									onClick={() => setEditAnswerId(answer.id)}
									className="btn"
								>
									Edit
								</button>
							</div>

							<div>
								<button
									onClick={() => setDeleteAnswerId(answer.id)}
									className="btn"
								>
									Delete
								</button>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default QuestionAnswersPage;
