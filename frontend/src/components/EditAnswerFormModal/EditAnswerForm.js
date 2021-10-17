import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateAnswer } from "../../store/answers";

const EditAnswerForm = ({ setShowModal, i }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const questionId = id;
	const selectedAnswer = useSelector((state) => state.answers);
	console.log(i);

	const [answer, setAnswer] = useState("");
	// const [validationErrors, setValidationErrors] = useState([]);

	// const validate = () => {
	// 	const validationErrors = [];

	// 	if (!title)
	// 		validationErrors.push("Please provide a title for your question");

	// 	if (title.length > 255) {
	// 		validationErrors.push(
	// 			"Please write a shorter title (you have " + title.length + " chars)"
	// 		);
	// 	}

	// 	return validationErrors;
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		// const errors = validate();
		// if (errors.length > 0) return setValidationErrors(errors);

		const data = {
			answer,
		};

		const editedAnswer = await dispatch(updateAnswer(data));

		if (editedAnswer) {
			setShowModal(false);
			history.push(`/questions/${questionId}`);
		}
	};

	return (
		<div>
			<h2>Edit Answer</h2>
			{/* {validationErrors.length > 0 && (
					<div>
						The following errors were found:
						<ul>
							{validationErrors.map((error) => (
								<li key={error}>{error}</li>
							))}
						</ul>
					</div>
				)} */}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="answer">Answer:</label>
					<input
						id="answer"
						type="text"
						onChange={(e) => setAnswer(e.target.value)}
						value={answer}
						required
					/>
				</div>

				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default EditAnswerForm;
