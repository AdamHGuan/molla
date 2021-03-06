import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateQuestion } from "../../store/questions";

const EditQuestionForm = ({ setShowModal }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const question = useSelector((state) => state.questions[id]);

	const [title, setTitle] = useState(question.title);
	const [validationErrors, setValidationErrors] = useState([]);

	const validate = () => {
		const validationErrors = [];

		if (!title)
			validationErrors.push("Please provide a title for your question");

		if (title.length > 255) {
			validationErrors.push(
				"Please write a shorter title (you have " + title.length + " chars)"
			);
		}

		return validationErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = validate();
		if (errors.length > 0) return setValidationErrors(errors);

		const data = {
			id,
			title,
		};

		const question = await dispatch(updateQuestion(data));

		if (question) {
			setShowModal(false);
			history.push(`/questions/${id}`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		setShowModal(false);
	};

	if (question) {
		return (
			<div className="modal-main">
				<h2>Edit Question</h2>
				{validationErrors.length > 0 && (
					<div>
						The following errors were found:
						<ul>
							{validationErrors.map((error) => (
								<li key={error}>{error}</li>
							))}
						</ul>
					</div>
				)}
				<form onSubmit={handleSubmit} className="form-container">
					<div>
						{/* <label htmlFor="title">Title:</label> */}
						<textarea
							id="title"
							rows="7"
							cols="60"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</div>

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

export default EditQuestionForm;
