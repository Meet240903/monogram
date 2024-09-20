import React, { useEffect, useState } from "react";
import LendingPage from "./HowItWork/Lending";
import CustomizePage from "./HowItWork/Customize";
import ScrollingImages from "./HowItWork/ScrollImage";
import ScrollingContent from "./HowItWork/ScrollingContent";
import BackgroundImage from "./HowItWork/BackgroundImageSection";
const HowItWork = () => {
	const [sectionState, setSectionState] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			setSectionState((prevState) => (prevState === 2 ? 3 : 2));
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<LendingPage />
			<CustomizePage />
			<ScrollingImages />
			<ScrollingContent sectionState={sectionState} />
			<BackgroundImage />
		</div>
	);
};

export default HowItWork;
