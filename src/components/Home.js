import React from "react";
import HomeTop from "./home/HomeTop";
import HomeMonogram from "./home/HomeMonogram";
import MeetTheModule from "./home/MeetTheModule";
import WorkflowSection from "./home/WorkflowSection";
import SoftwareIntegrationSection from "./home/SoftwareIntegrationSection";
import OurGaurantee from "./home/OurGaurantee";
import ReviewsSection from "./home/ReviewsSection";
import BackgroundImageSection from "./HowItWork/BackgroundImageSection";
const Home = () => {
	return (
		<div>
			<HomeTop />
			<HomeMonogram />
			<MeetTheModule />
			<WorkflowSection />
			<SoftwareIntegrationSection />
			<OurGaurantee />
			<ReviewsSection />
			<BackgroundImageSection />
		</div>
	);
};

export default Home;
