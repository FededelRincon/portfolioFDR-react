import React from "react";
import coverVideo from "../../media/coverVideo.mp4";

import "./Cover.css";


const Cover = () => {
	return (
		<div className="cover-container">
			<video className="video" src={coverVideo} autoPlay loop muted />
			<h1>Federico del Rincon</h1>
			<p>Front-End Web Developer</p>
		</div>
	);
};

export default Cover;
