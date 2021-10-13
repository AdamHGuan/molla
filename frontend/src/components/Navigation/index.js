import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import CreateQuestionFormModal from "../CreateQuestionFormModal";

import "./Navigation.css";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<>
				<CreateQuestionFormModal />
				<ProfileButton user={sessionUser} />
			</>
		);
	} else {
		sessionLinks = (
			<>
				<LoginFormModal />
				<NavLink to="/signup">Sign Up</NavLink>
			</>
		);
	}

	return (
		<div className="navbar">
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/questions">
				Questions
			</NavLink>

			{isLoaded && sessionLinks}
		</div>
	);
}

export default Navigation;
