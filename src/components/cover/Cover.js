import React from "react";
import coverVideo from "../../media/particles-wave-motion-on-black.mp4";

import "./Cover.css";


const Cover = () => {
	return (
		<div className="cover-container">
			
			<video className="video" src={coverVideo} autoPlay loop muted />
			
			<h1>Federico del Rincon</h1>
			<p className="job">Full Stack Developer</p>
		</div>
	);
};

export default Cover;
