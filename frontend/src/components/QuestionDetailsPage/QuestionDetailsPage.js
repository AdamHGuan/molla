import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../store/questions";
import { getAnswers } from "../../store/answers";

import EditQuestionFormModal from "../EditQuestionFormModal";
import DeleteQuestionFormModal from "../DeleteQuestionFormModal";
import "./QuestionDetailsPage.css";

const QuestionDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const question = useSelector((state) => state.questions[id]);
	const answers = useSelector((state) => state.answers);
	const user = useSelector((state) => state.session.user);
	const editable = user?.id === question?.ownerId;

	useEffect(() => {
		dispatch(getOneQuestion(id));
	}, [dispatch, id]);

	useEffect(() => {
		dispatch(getAnswers(id));
	}, [dispatch, id]);

	if (question) {
		return (
			<div className="questionPageContainer">
				<div className="questionContainer">
					<p>{question.title}</p>
					<div>
						{editable && (
							<>
								<div>
									<EditQuestionFormModal />
								</div>
								<div>
									<DeleteQuestionFormModal />
								</div>
							</>
						)}
					</div>
				</div>
				<div className="answerContainer">
					<ul>
						{Object.keys(answers).map((key) => (
							<li key={answers[key].id}>
								<div>{answers[key].answer}</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
	return null;
};

export default QuestionDetailsPage;
