import React, { useState, useEffect } from "react";
import "../../assets/styles/home/hometop.css"; // Assuming you'll style using an external CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import FadeComponent from "../Fadeanimation";

const HomeTop = () => {
	const [showInfo, setShowInfo] = useState(false);
	const [bgColor, setBgColor] = useState("dark");

	const handleArrowClick = () => {
		setShowInfo(true);
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 300) {
			setBgColor("dark");
		} else {
			setBgColor("light");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`app ${bgColor}`}>
			<div className={`background ${bgColor}`}>
				<FadeComponent duration={1000} delay={900} direction={"up"}>
					<div className="center-content">
						<h1>Monogram</h1>
						<h2>Creative Console</h2>
						<p>Simple. Powerful. Adaptable. A better way to create.</p>
						<div className="button-container">
							<button className="btn">Watch the Video</button>
							<button className="btn">Shop Now</button>
						</div>
						<div className="down-arrow-hometop" onClick={handleArrowClick}>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
					</div>{" "}
				</FadeComponent>
			</div>
			{showInfo && (
				<div className="info-section show">
					{" "}
					<FadeComponent duration={1000} delay={900} direction={"up"}>
						<h2>What is a Creative Console?</h2>
						<p>
							Creative Console is a modular, freeform control surface designed
							to streamline editing and make interacting with creative software
							more engaging. It is perfectly suited for photo editing and
							retouching, video editing, color grading, virtual production,
							audio/music production, and other creative workflows.
						</p>
					</FadeComponent>
				</div>
			)}
		</div>
	);
};

export default HomeTop;
