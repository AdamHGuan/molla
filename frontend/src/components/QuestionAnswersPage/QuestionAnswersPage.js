import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../store/answers";
import "./QuestionAnswersPage";

const QuestionAnswersPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const answers = useSelector((state) => Object.values(state.answers));

	// const editable = user?.id === answers.answer?.ownerId;

	useEffect(() => {
		dispatch(getAnswers(id));
	}, [dispatch, id]);

	return (
		<div className="answersContainer">
			{answers.map((answer) => (
				<div className="answerDiv" key={answer.id}>
					<p> {answer.answer} </p>
				</div>
			))}
		</div>
	);
};

export default QuestionAnswersPage;

// <div>
//     <EditAnswerFormModal />
// </div>
// <div>
//     <DeleteAnswerModal />
// </div>
