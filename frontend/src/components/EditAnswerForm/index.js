import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnswer } from "../../store/answers";
import "./index.css";

const EditAnswerForm = ({ answerId, hideForm }) => {
	const theAnswer = useSelector((state) => state.answers[answerId]);
	const dispatch = useDispatch();

	const [answer, setAnswer] = useState(theAnswer.answer);
	const updatedAnswer = (e) => setAnswer(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			...theAnswer,
			answer,
		};

		const editedAnswer = await dispatch(updateAnswer(data));

		if (editedAnswer) {
			hideForm();
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		hideForm();
	};

	return (
		<div className="editAnswerForm">
			<h2>Edit Answer</h2>
			<form onSubmit={handleSubmit} className="form-container">
				<textarea
					id="answer"
					rows="7"
					cols="60"
					className="formTextArea"
					// placeholder="Please enter you answer."
					value={answer}
					onChange={updatedAnswer}
				/>

				<button type="submit" className="btn">
					Update Answer
				</button>
				<button type="button" onClick={handleCancelClick} className="btn">
					Cancel
				</button>
			</form>
		</div>
	);
};

export default EditAnswerForm;
