import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../store/questions";

const QuestionDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const question = useSelector((state) => state.question.id);
	console.log(`===============`, question);

	useEffect(() => {
		dispatch(getOneQuestion(id));
	}, [dispatch, id]);

	if (question) {
		return (
			<div>
				<p>{question.title}</p>
			</div>
		);
	}
	return null;
};

export default QuestionDetailsPage;
