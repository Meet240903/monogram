import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/HowItWork/customize.css"; // Import the custom CSS

const FullWidthSection = () => {
	const handleScrollDown = () => {
		window.scrollBy({
			top: window.innerHeight,
			behavior: "smooth",
		});
	};

	return (
		<div className="full-width-section">
			<div className="content">
				<h1>Personalize to the Way You Work</h1>
				<p>
					Monogram Creator app makes customizing a breeze. Customize each module
					to your needs, change module sensitivity, or create an entirely new
					profile for each stage of your workflow.
				</p>
				<button className="customize-button">Start Customizing</button>
				<div className="down-arrow-customize" onClick={handleScrollDown}>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			</div>
		</div>
	);
};

export default FullWidthSection;
