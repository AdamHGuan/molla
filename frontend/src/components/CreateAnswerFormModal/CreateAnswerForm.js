import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createAnswer } from "../../store/answers";

const CreateAnswerForm = ({ setShowModal }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const ownerId = useSelector((state) => state.session.user.id);
	const questionId = id;
	const [answer, setAnswer] = useState("");

	// const [validationErrors, setValidationErrors] = useState([]);

	// const validate = () => {
	// 	const validationErrors = [];

	// 	if (!answer)
	// 		validationErrors.push("Please provide a title for your question");

	// 	if (answer.length > 255) {
	// 		validationErrors.push(
	// 			"Please write a shorter title (you have " + answer.length + " chars)"
	// 		);
	// 	}

	// 	return validationErrors;
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		// const errors = validate();
		// if (errors.length > 0) return setValidationErrors(errors);

		const data = {
			ownerId,
			questionId,
			answer,
		};

		const newAnswer = await dispatch(createAnswer(data, questionId));

		if (newAnswer) {
			setShowModal(false);
			history.push(`/questions/${questionId}`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		setShowModal(false);
	};

	return (
		<div className="modal-main">
			<h2>Please provide your answer</h2>
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
			<form onSubmit={handleSubmit} className="form-container">
				<div>
					{/* <label htmlFor="answer">Answer:</label> */}
					<textarea
						id="answer"
						rows="5"
						cols="33"
						className="formTextArea"
						// placeholder="Please enter you answer."
						onChange={(e) => setAnswer(e.target.value)}
						value={answer}
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
};

export default CreateAnswerForm;
