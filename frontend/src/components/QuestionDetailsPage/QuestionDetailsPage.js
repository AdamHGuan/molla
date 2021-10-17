import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../store/questions";
import EditQuestionFormModal from "../EditQuestionFormModal";
import DeleteQuestionFormModal from "../DeleteQuestionFormModal";
import QuestionAnswersPage from "../QuestionAnswersPage";
import CreateAnswerFormModal from "../CreateAnswerFormModal";
import "./QuestionDetailsPage.css";

const QuestionDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const question = useSelector((state) => state.questions[id]);
	const user = useSelector((state) => state.session.user);
	const editable = user?.id === question?.ownerId;
	const [answerId, setAnswerId] = useState(null);

	useEffect(() => {
		dispatch(getOneQuestion(id));
	}, [dispatch, id]);

	if (question) {
		return (
			<>
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
						<div>
							<CreateAnswerFormModal />
						</div>
					</div>
					<div className="answerContainer">
						<QuestionAnswersPage
							setAnswerId={setAnswerId}
							answerId={answerId}
						/>
					</div>
				</div>
			</>
		);
	}
	return null;
};

export default QuestionDetailsPage;
