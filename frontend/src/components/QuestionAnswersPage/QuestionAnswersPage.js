import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../store/answers";
import EditAnswerFormModal from "../EditAnswerFormModal";
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
				<div key={answer.id}>
					<div className="answerDiv">
						<p> {answer.answer} </p>
						<p> {answer.id} </p>
					</div>
					<div>
						<EditAnswerFormModal />
					</div>
				</div>
			))}
		</div>
	);
};

export default QuestionAnswersPage;

// <div>
//     <DeleteAnswerModal />
// </div>
