import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneQuestion } from "../../store/questions";

import EditQuestionFormModal from "../EditQuestionFormModal";
import DeleteQuestionFormModal from "../DeleteQuestionFormModal";
import QuestionAnswersPage from "../QuestionAnswersPage";
import CreateAnswerFormModal from "../CreateAnswerFormModal";
import EditAnswerForm from "../EditAnswerForm";
import "./QuestionDetailsPage.css";

const QuestionDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const question = useSelector((state) => state.questions[id]);
	const user = useSelector((state) => state.session.user);

	const [editAnswerId, setEditAnswerId] = useState(null);

	const editable = user?.id === question?.ownerId;

	useEffect(() => {
		dispatch(getOneQuestion(id));
		setEditAnswerId(null);
	}, [dispatch, id]);

	let content = null;

	if (editAnswerId) {
		content = (
			<EditAnswerForm
				question={question}
				answerId={editAnswerId}
				hideForm={() => setEditAnswerId(null)}
			/>
		);
	} else {
		content = (
			<div>
				<QuestionAnswersPage
					question={question}
					setEditAnswerId={setEditAnswerId}
				/>
			</div>
		);
	}

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
					<div className="answerContainer">{content}</div>
				</div>
			</>
		);
	}
	return null;
};

export default QuestionDetailsPage;
