import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { removeQuestion } from "../../store/questions";

const DeleteQuestionForm = ({ setShowModal }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const question = useSelector((state) => state.questions[id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const questionId = await dispatch(removeQuestion(id));

		if (questionId) {
			history.push(`/questions`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		setShowModal(false);
	};

	if (question) {
		return (
			<div>
				<h2>Delete question?</h2>
				<div>
					<p>
						Are you sure you would like to delete this question? This action
						can't be undone.
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<button type="submit" className="btn">
						Submit
					</button>

					<button type="button" onClick={handleCancelClick} className="btn">
						Cancel
					</button>
				</form>
			</div>
		);
	}
	return null;
};

export default DeleteQuestionForm;
