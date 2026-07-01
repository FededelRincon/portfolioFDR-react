import React, { useRef, useState, useLayoutEffect } from "react";
import coverVideo from "../../media/particles-wave-motion-on-black.mp4";
import { useLang } from "../../context/LanguageContext";

import "./Cover.css";


const Cover = () => {
	const { t } = useLang();

	const jobLength = t.cover.job.length;

	const jobRef = useRef(null);
	const [jobWidth, setJobWidth] = useState(null);

	// Mide el ancho real del texto (px) para que el caret quede pegado,
	// sin depender de la unidad `ch` (Roboto no es monoespaciada).
	useLayoutEffect(() => {
		if (jobRef.current) {
			setJobWidth(jobRef.current.scrollWidth);
		}
	}, [t.cover.job]);

	const scrollTo = (id) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<div className="cover-container">

			<video className="video" src={coverVideo} autoPlay loop muted playsInline preload="auto" />
			<div className="cover-overlay" aria-hidden="true" />

			<h1 className="animate__animated animate__bounceInLeft" >Federico del Rincon</h1>
			<p
				className="job"
				ref={jobRef}
				key={t.cover.job}
				style={{
					"--job-steps": jobLength,
					...(jobWidth != null ? { width: `${jobWidth}px` } : {}),
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
