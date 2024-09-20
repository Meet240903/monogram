import React from "react";
import "../../assets/styles/HowItWork/scrollingcontent.css";
import img_right from "../../assets/images/HowItWork/rightimage.webp"; // Import the image

const CompatibilitySection = ({ sectionState }) => {
	return (
		<>
			{sectionState === 2 && (
				<div className="content-alternate">
					<div className="text-left">
						<h2>Native Compatibility</h2>
						<p>
							Native integrations hook directly into software for the greatest
							level of control and the smoothest performance. Unlike hotkeys,
							Creative Console gives you the most engaging tactile experience
							that connects you to your work.
						</p>
						<p>
							Native compatibility includes Adobe Creative Suite, Unreal Engine,
							and Capture One Pro.
						</p>
					</div>
					<div className="image-right">
						{/* Use img_right directly */}
						<img src={img_right} alt="Native Compatibility" />
					</div>
				</div>
			)}

			{sectionState === 3 && (
				<div className="content-alternate">
					<div className="text-left">
						<h2>Universal Compatibility</h2>
						<p>
							Use Monogram Creative Console with any software. Customize each
							module via universal input modes like keyboard shortcuts, MIDI,
							mouse clicks, and joystick actions.
						</p>
						<p>
							Universal Compatibility works great with apps like Ableton Live,
							Logic, Chrome, Spotify, and more.
						</p>
					</div>
					<div className="image-right">
						{/* Use img_right directly */}
						<img src={img_right} alt="Universal Compatibility" />
					</div>
				</div>
			)}
		</>
	);
};

export default CompatibilitySection;
