import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createQuestion } from "../../store/questions";

const CreateQuestionForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const ownerId = useSelector((state) => state.session.user.id);
	const [title, setTitle] = useState("");
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
			ownerId,
			title,
		};

		const question = await dispatch(createQuestion(data));

		if (question) {
			history.push(`/questions/${question.id}`);
		}
	};
	return (
		<div>
			<h2>New Question</h2>
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
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title:</label>
					<input
						id="title"
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						required
					/>
				</div>

				
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default CreateQuestionForm;
