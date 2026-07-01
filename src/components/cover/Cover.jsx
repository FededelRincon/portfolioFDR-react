import React from "react";
import coverVideo from "../../media/particles-wave-motion-on-black.mp4";
import { useLang } from "../../context/LanguageContext";

import "./Cover.css";


const Cover = () => {
	const { t } = useLang();

	const jobLength = t.cover.job.length;

	const scrollTo = (id) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<div className="cover-container">

			<video className="video" src={coverVideo} autoPlay loop muted playsInline preload="auto" />
			<div className="cover-overlay" aria-hidden="true" />

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

			<div className="cover-cta">
				<button type="button" className="cover-btn" onClick={() => scrollTo("projects")}>
					{t.cover.viewProjects}
				</button>
				<button type="button" className="cover-btn" onClick={() => scrollTo("contact")}>
					{t.cover.contact}
				</button>
			</div>

			<button
				type="button"
				className="scroll-indicator"
				aria-label={t.cover.viewProjects}
				onClick={() => scrollTo("about")}
			>
				<i className="fas fa-chevron-down" aria-hidden="true"></i>
			</button>
		</div>
	);
};

export default Cover;
