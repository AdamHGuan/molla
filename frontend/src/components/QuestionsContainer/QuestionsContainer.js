import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import Molla2 from "../video/Molla2.mp4";

import "./QuestionsContainer.css";

const QuestionsContainer = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => Object.values(state.questions));

	useEffect(() => {
		dispatch(getQuestions());
	}, [dispatch]);

	return (
		<div className="mainQuestionscontainer">
			<video
				autoPlay
				loop
				muted
				style={{
					position: "absolute",
					width: "100%",
					left: "50%",
					top: "50%",
					height: "100%",
					objectFit: "cover",
					transform: "translate(-50%, -50%",
					zIndex: "-1",
				}}
			>
				<source src={Molla2} type="video/mp4" />
			</video>
			<div className="questionsLeftContainer"></div>
			<div className="questionsCenterContainer">
				{questions.map((question) => (
					<Link key={question.id} to={`/questions/${question.id}`}>
						<div className="questionsLinks">
							<p> {question.title} </p>
						</div>
					</Link>
				))}
			</div>
			<div className="questionsLeftContainer"></div>
		</div>
	);
};

export default QuestionsContainer;
