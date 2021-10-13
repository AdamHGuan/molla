import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getOneQuestion } from "../../store/questions";

const QuestionDetailsPage = () => {
	const { id } = useParams();
	console.log(id);
	const dispatch = useDispatch();
	const question = useSelector((state) => state.question[id]);

	useEffect(() => {
		dispatch(getOneQuestion(id));
	}, [dispatch]);

	if (question) {
		return (
			<div>
				<p>{question.title}</p>
				<p>{question.description}</p>
			</div>
		);
	}
};

export default QuestionDetailsPage;