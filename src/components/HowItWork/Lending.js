import React, { useRef, useState, useEffect } from "react";
import "../../assets/styles/HowItWork/lending.css"; // Custom CSS
import imgMain from "../../assets/images/HowItWork/topimage.webp";
import imgStep1 from "../../assets/images/HowItWork/kickstarter.webp";
import imgStep2 from "../../assets/images/HowItWork/kickstarter.webp";
import imgStep3 from "../../assets/images/HowItWork/kickstarter.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faAppleAlt,
	faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
	const contentRef = useRef(null);

	// Track current step based on scroll position
	const [currentStep, setCurrentStep] = useState(0);

	// On page load, set first step to visible
	useEffect(() => {
		setCurrentStep(1);
	}, []);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const windowHeight = window.innerHeight;

		// Adjust the scroll thresholds based on actual step element positions
		const secondStepThreshold = windowHeight * 0.1;
		const thirdStepThreshold = windowHeight * 0.5;

		if (
			scrollPosition >= secondStepThreshold &&
			scrollPosition < thirdStepThreshold
		) {
			setCurrentStep(2);
		} else if (scrollPosition >= thirdStepThreshold) {
			setCurrentStep(3);
		} else {
			setCurrentStep(1); // Default to step 1 if before second step threshold
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollDown = () => {
		contentRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="landing-page">
			{/* Main Image Section */}
			<div
				className="main-image-section"
				style={{ backgroundImage: `url(${imgMain})` }}
			>
				<div className="down-arrow" onClick={handleScrollDown}>
					<FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />
				</div>
			</div>

			{/* Content Section */}
			<div ref={contentRef} className="content-section">
				<h2>Get Started in 3 Easy Steps</h2>
				<p>
					Creative Console provides a fast and simple setup with magnetically
					connecting modules and a user-friendly app.
				</p>

				{/* Steps with Images */}
				<div className="steps-row">
					{/* Step 1: Appears on page load */}
					<div
						className={`step-item ${currentStep >= 1 ? "slide-in" : "hidden"}`}
					>
						<div
							className="step-image"
							style={{ backgroundImage: `url(${imgStep1})` }}
						>
							<div className="step-content">
								<h3>Download Monogram Creator</h3>
								<p>macOS 12+</p>
								<p>Windows 10, 64 bit</p>
								<div className="buttons">
									<button className="btn mac">
										<FontAwesomeIcon icon={faAppleAlt} /> Download for Mac
									</button>
									<button className="btn windows">
										<FontAwesomeIcon icon={faWindowRestore} /> Download for
										Windows
									</button>
								</div>
								<p>
									Want to try the latest features? Sign up for the Monogram
									Creator Beta program here.
								</p>
							</div>
						</div>
					</div>

					{/* Step 2: Appears on scroll */}
					<div
						className={`step-item ${currentStep >= 2 ? "slide-in" : "hidden"}`}
					>
						<div
							className="step-image"
							style={{ backgroundImage: `url(${imgStep2}) ` }}
						>
							<div className="step-content">
								<h3>Setup Your Console</h3>
								<p>Magnetically connect the modules.</p>
								<div className="buttons">
									<button className="btn mac">Get Setup Guide</button>
								</div>
								<p>Find more tips and tutorials here.</p>
							</div>
						</div>
					</div>

					{/* Step 3: Appears on scroll */}
					<div
						className={`step-item ${currentStep >= 3 ? "slide-in" : "hidden"}`}
					>
						<div
							className="step-image"
							style={{ backgroundImage: `url(${imgStep3}) ` }}
						>
							<div className="step-content">
								<h3>Start Creating</h3>
								<p>
									Launch Monogram Creator and start building your creative
									workflow.
								</p>
								<div className="buttons">
									<button className="btn mac">Launch Creator</button>
								</div>
								<p>Learn how to use advanced features here.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
