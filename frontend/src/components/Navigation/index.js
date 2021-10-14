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
			<div className="navLeft">
				<NavLink exact to="/">
					Home
				</NavLink>
			</div>
			<div className="navCenter">
				<NavLink exact to="/questions">
					Questions
				</NavLink>
			</div>
			<div className="navRight">{isLoaded && sessionLinks}</div>
		</div>
	);
}

export default Navigation;
