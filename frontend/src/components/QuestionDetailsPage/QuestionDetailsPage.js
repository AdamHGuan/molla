import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../store/questions";

const QuestionDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const question = useSelector((state) => state.questions[id]);
	const user = useSelector((state) => state.session.user);
	const editable = user.id === question?.ownerId;

	useEffect(() => {
		dispatch(getOneQuestion(id));
	}, [dispatch, id]);

	if (question) {
		return (
			<div>
				<p>{question.title}</p>
				<div>
					{editable && (
						<div>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					)}
				</div>
			</div>
		);
	}
	return null;
};

export default QuestionDetailsPage;
