import React from "react";
import coverVideo2 from "../../media/particles-wave-motion-on-black.mp4";
import coverVideo from "../../media/coverVideo.mp4";

import "./Cover.css";


const Cover = () => {
	return (
		<div className="cover-container">
			
			<video className="video" src={coverVideo2} autoPlay loop muted />
			
			<h1>Federico del Rincon</h1>
			<p className="job">Full Stack Developer</p>
		</div>
	);
};

export default Cover;
