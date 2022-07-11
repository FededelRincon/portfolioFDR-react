import React from "react";
// import coverVideo from "../../media/coverVideo.mp4";

import "./Cover.css";


const Cover = () => {
	return (
		<div className="cover-container">
			
			{/* <video className="video" src={coverVideo} autoPlay loop muted /> */}
			{/* I remove the video, because netifly it takes to much time to download... */}
			
			<h1>Federico del Rincon</h1>
			<p className="job">Full Stack Developer</p>
		</div>
	);
};

export default Cover;
