import React, { useState } from "react";
import "../../assets/styles/download/monogramcreator.css";
import { FaApple, FaBars, FaWindows, faBars } from "react-icons/fa"; // Import icons

const MonogramCreator = () => {
	const [activeTab, setActiveTab] = useState("monogram");
	const [menuOpen, setMenuOpen] = useState(false);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
		setMenuOpen(false); // Close the menu on small screens when a tab is clicked
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="container_monogram">
			<div
				className={`menu-button_monogram ${menuOpen ? "open" : ""}`}
				onClick={toggleMenu}
			>
				Release selected items
				{"  "} <FaBars />
			</div>

			<div className={`links-container_monogram ${menuOpen ? "show" : ""}`}>
				<div
					className={`link_monogram ${
						activeTab === "monogram" ? "active" : ""
					}`}
					onClick={() => handleTabClick("monogram")}
				>
					Monogram Creator <span className="line_monogram"></span>
				</div>
				<div
					className={`link_monogram ${activeTab === "beta" ? "active" : ""}`}
					onClick={() => handleTabClick("beta")}
				>
					Creator Beta <span className="line_monogram"></span>
				</div>
				<div
					className={`link_monogram ${activeTab === "alpha" ? "active" : ""}`}
					onClick={() => handleTabClick("alpha")}
				>
					Creator Alpha
				</div>
			</div>

			<div className="content_monogram">
				{activeTab === "monogram" && (
					<div className="content-box_monogram">
						<h2>Monogram Creator</h2>
						<p>
							Want to try the latest features and help improve app performance?
							Sign up for the Monogram Creator Beta program here.
						</p>
						<div className="icon-section">
							<FaApple className="icon_monogram" />
							<FaWindows className="icon_monogram" />
						</div>
						<div className="download-section">
							<button className="download-button">Mac Download</button>
							<span className="spacer"></span>
							<button className="download-button">Windows Download</button>
						</div>
						<a href="/release-notes" className="release-notes-link">
							Release Notes
						</a>
					</div>
				)}

				{activeTab === "beta" && (
					<div className="content-box_monogram">
						<h2>Creator Beta</h2>
						<p>
							Get access to an exclusive technical preview of Monogram Creator.
							Help shape our next generation of software by sharing feedback,
							bug reports, and feature requests. Creator Beta can be installed
							alongside the standard Monogram Creator, but we do recommend
							periodically saving your profiles just in case. Thank you for
							joining us in creating something wonderful for creatives around
							the world.
						</p>
						<div className="icon-section">
							<FaApple className="icon_monogram" />
							<FaWindows className="icon_monogram" />
						</div>
						<div className="download-section">
							<button className="download-button">Mac Download</button>
							<span className="spacer"></span>
							<button className="download-button">Windows Download</button>
						</div>
						<a href="/release-notes" className="release-notes-link">
							Release Notes
						</a>
					</div>
				)}

				{activeTab === "alpha" && (
					<div className="content-box_monogram">
						<h2>Creator Alpha</h2>
						<form>
							<label>Your Email Address</label>
							<input type="email" placeholder="Email Address" />
							<label>Given Name</label>
							<input type="text" placeholder="First Name" />
							<label>Surname</label>
							<input type="text" placeholder="Last Name" />
							<label>Country</label>
							<input type="text" placeholder="Country" />
						</form>
						<div className="download-section">
							<button className="download-button">Mac Download</button>
							<span className="spacer"></span>
							<button className="download-button">Windows Download</button>
						</div>
						<a href="/release-notes" className="release-notes-link">
							Release Notes
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default MonogramCreator;
