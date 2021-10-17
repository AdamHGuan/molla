import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "../../store/answers";

const DeleteAnswerForm = ({ answerId, hideForm }) => {
	const theAnswer = useSelector((state) => state.answers[answerId]);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await dispatch(deleteAnswer(answerId));

		hideForm();
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		hideForm();
	};

	return (
		<div className="editAnswerForm">
			<h2>Delete Answer</h2>
			<form onSubmit={handleSubmit}>
				<p>{theAnswer.answer}</p>
				<button type="submit" className="btn">
					Delete
				</button>
				<button type="button" onClick={handleCancelClick} className="btn">
					Cancel
				</button>
			</form>
		</div>
	);
};

export default DeleteAnswerForm;
