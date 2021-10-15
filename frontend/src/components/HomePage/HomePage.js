import React from "react";
import "./HomePage.css";
import MollaVideo from "../video/Molla-Video.mp4";

const HomePage = () => {
	return (
		<div className="HomePageContainer">
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
				<source src={MollaVideo} type="video/mp4" />
			</video>
		</div>
	);
};

export default HomePage;
