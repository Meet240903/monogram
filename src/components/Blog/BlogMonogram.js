import React, { useState } from "react";
import "../../assets/styles/blog/blogmonogram.css";
import monogram1 from "../../assets/images/blog/blog_monogram1.webp";
import monogram2 from "../../assets/images/blog/blog_monogram_photo.webp";
import monogram3 from "../../assets/images/blog/blog_monogram_video.webp";
import monogram4 from "../../assets/images/blog/BLOG_MONOGRAM_AUDIO.webp";
import monogram5 from "../../assets/images/blog/blog_monogram_product.jpeg";
import { FaArrowRight, FaBars } from "react-icons/fa"; // Import FontAwesome menu icon
import { Link } from "react-router-dom";
const BlogMonogram = () => {
	// State to track which section is active and to toggle mobile menu
	const [activeSection, setActiveSection] = useState("At Monogram");
	const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

	// Data for different sections
	const content = {
		"At Monogram": {
			image: monogram1,
			title: "Introducing Monogram Keyboard",
			articles: [
				{
					title: "Celebrating a Decade of Software",
					time: "1 min read",
					description: "How our software development journey started",
				},
				{
					title: "Celebrating a Decade of Monogram",
					time: "1 min read",
					description: "A look into Monogram’s journey over the years",
				},
				{
					title: "How to set up and share creator profiles for your console",
					time: "2 min read",
					description:
						"Learn what a creator profile is and how you can exchange profiles with other creatives in the Monogram community!",
				},
			],
		},
		Photo: {
			image: monogram2,
			title: "LV UP WITH MONOGRAM:LIGHTROOM CLASSIC",
			articles: [
				{
					title: "LV UP with Monogram: Photoshop UXP",
					time: "1 min read",
					description: "Use Photoshop UXP Plugin Panel and Color Swatches",
				},
				{
					title: "Creator Interview #5: Taylor Jackson",
					time: "2 min read",
					description:
						"With years of experience, Taylor Jackson is the person to follow for all things wedding photography.",
				},
				{
					title: "Creator Interview #4: Uri Segura",
					time: "2 min read",
					description:
						"Uri Segura is a Barcelona based freelance photographer and visual storyteller sharing his journey into the creative space.",
				},
			],
		},
		Video: {
			image: monogram3,
			title: "LV UP WITH MONOGRAM:ADOBE PREMIERE PRO",
			articles: [
				{
					title: "LV UP with Monogram: Final Cut Pro",
					time: "3 min read",
					description:
						"Use Color Wheels, Color Boards, Navigation and Clip Motion in Final Cut Pro.",
				},
				{
					title: "Creator Interview #8: Landon Bytheway",
					time: "3 min read",
					description:
						"A talented creator with an innovative storytelling style that captivates his audience and brands with his creativity.",
				},
				{
					title: "Creator Interview #7: Sven Pape",
					time: "4 min read",
					description:
						"Sven’s experience in the Film Editing industry has an impressive track record in big name movies and TV shows. You don’t want to miss what he has to say!",
				},
			],
		},
		Audio: {
			image: monogram4,
			title: "THE TOP 5 MOST COMMON USES OF SLIDER ",
			articles: [
				{
					title: "Creator Interviews #6: Sanjay C",
					time: "2 min read",
					description:
						"Sanjay is a skilled music producer with a YouTube channel dedicated to all things music production.",
				},
				{
					title: "LV UP with Monogram: Logic Pro X",
					time: "2 min read",
					description:
						"Use Transport Controls, Smart Controls, and Orbiter Module in Logic Pro X",
				},
				{
					title: "LV UP with Monogram: Spitfire Audio and MIDI Automation",
					time: "1 min read",
					description:
						"How to use Monogram with Spitfire Audio and MIDI Automation",
				},
			],
		},
		Product: {
			image: monogram5,
			title: "A LOOK BACK:PALETEE BEGINNINGS",
			articles: [
				{
					title: "Engineering Milestones and the Story Behind Action Keys",
					time: "3 min read",
					description: "Designing Monogram Keyboard and Action Keys",
				},
				{
					title: "The top 5 most common uses of Orbiter",
					time: "2 min read",
					description:
						"A list of the top 5 most popular actions our users make with the Orbiter module in our integrated apps.",
				},
				{
					title:
						"Monogram’s software development process - A look behind the curtain",
					time: "2 min read",
					description:
						"Learn about what goes on behind the scenes and inner details of our software development process and sprints.",
				},
			],
		},
	};

	return (
		<div className="container">
			{/* Mobile Menu Icon */}
			<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
				<FaBars />
			</div>

			{/* Navigation Links */}
			<div className={`links-container ${menuOpen ? "open" : ""}`}>
				{Object.keys(content).map((section) => (
					<button
						key={section}
						className={`nav-link ${activeSection === section ? "active" : ""}`}
						onClick={() => {
							setActiveSection(section);
							setMenuOpen(false); // Close menu on selection
						}}
					>
						{section}
					</button>
				))}
			</div>

			{/* Content Section */}
			<div className="content-container">
				<div className="image-section">
					<img
						src={content[activeSection].image}
						alt={content[activeSection].title}
					/>
					<h2>{content[activeSection].title}</h2>
				</div>
				<div className="text-section">
					{content[activeSection].articles.map((article, index) => (
						<div key={index} className="article">
							<h3>{article.title}</h3>{" "}
							{article.link && (
								<Link to={article.link} className="arrow-link">
									<FaArrowRight className="right-arrow" />
								</Link>
							)}
							<p>{article.time}</p>
							<p>{article.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogMonogram;
