import React from "react";
import coverVideo from "../../media/particles-wave-motion-on-black.mp4";
import { useLang } from "../../context/LanguageContext";

import "./Cover.css";


const Cover = () => {
	const { t } = useLang();

	const jobLength = t.cover.job.length;

	return (
		<div className="cover-container">

			<video className="video" src={coverVideo} autoPlay loop muted playsInline preload="auto" />

			<h1 className="animate__animated animate__bounceInLeft" >Federico del Rincon</h1>
			<p
				className="job"
				key={t.cover.job}
				style={{
					"--job-width": `${jobLength}ch`,
					"--job-steps": jobLength,
				}}
			>
				{t.cover.job}
			</p>
		</div>
	);
};

export default Cover;
