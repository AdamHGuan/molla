import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import QuestionsContainer from "./components/QuestionsContainer";
import QuestionDetailsPage from "./components/QuestionDetailsPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/questions" exact>
						<QuestionsContainer />
					</Route>
					<Route path="/questions/:id" exact>
						<QuestionDetailsPage />
					</Route>
				</Switch>
			)}
			<Footer />
		</>
	);
}

export default App;
