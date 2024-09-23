import React, { useState } from "react";
import "../assets/styles/header.css"; // Import CSS file for styling
import monogramlogo from "../assets/images/monogram-logo.jpg"; // Import image file for logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faChevronUp,
	faBars,
	faTimes,
	faRadio,
	faShoppingBag,
} from "@fortawesome/free-solid-svg-icons"; // Add faBars and faTimes
import { Link } from "react-router-dom";
const Header = () => {
	const [showWorkflowMenu, setShowWorkflowMenu] = useState(false);
	const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // State to handle menu open/close

	return (
		<header className="header-container">
			<div className="navbar-container">
				{/* Left side: Logo */}
				<div className="logo-container">
					<FontAwesomeIcon icon={faRadio} size="2x" />
					<Link
						to="/"
						className="logo-container"
						onClick={() => setMenuOpen(false)}
					>
						monogram
					</Link>
				</div>

				{/* Hamburger Menu Icon for mobile */}
				<div
					className="menu-toggle-container"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
				</div>

				{/* Right side: Navigation */}
				<ul className={`nav-links-container ${menuOpen ? "active" : ""}`}>
					<li>
						<Link to="/howitwork" onClick={() => setMenuOpen(false)}>
							<a href="#how-it-works">How it Works</a>
						</Link>
					</li>
					<li
						className="submenu-container"
						onMouseEnter={() => setShowWorkflowMenu(true)}
						onMouseLeave={() => setShowWorkflowMenu(false)}
					>
						<a href="#workflows">
							Workflows{" "}
							<FontAwesomeIcon
								icon={showWorkflowMenu ? faChevronUp : faChevronDown}
							/>
						</a>
						{showWorkflowMenu && (
							<ul className="dropdown-container">
								<li>
									<a href="#audio">Audio</a>
								</li>
								<li>
									<a href="#photo">Photo</a>
								</li>
								<li>
									<a href="#video">Video</a>
								</li>
								<li>
									<a href="#miniconsole">Mini Console</a>
								</li>
							</ul>
						)}
					</li>
					<li>
						<Link to="/download" onClick={() => setMenuOpen(false)}>
							<a href="#download">Download</a>
						</Link>
					</li>
					<li>
						{" "}
						<Link to="/blog" onClick={() => setMenuOpen(false)}>
							<a href="#blog">Blog</a>
						</Link>
					</li>
					<li>
						<Link to="/support" onClick={() => setMenuOpen(false)}>
							Support
						</Link>
					</li>
					<li>
						<a href="#shop" onClick={() => setMenuOpen(false)}>
							Shop
						</a>
					</li>
					<li
						className="submenu-container"
						onMouseEnter={() => setShowCurrencyMenu(true)}
						onMouseLeave={() => setShowCurrencyMenu(false)}
					>
						<a href="#currency">
							{" "}
							<FontAwesomeIcon icon={faShoppingBag} className="shopping-bag" />
							{"  "}
							USD{" "}
							<FontAwesomeIcon
								icon={showCurrencyMenu ? faChevronUp : faChevronDown}
							/>
						</a>
						{showCurrencyMenu && (
							<ul className="dropdown-container">
								<li>
									<a href="#usd">USD</a>
								</li>
								<li>
									<a href="#csd">CSD</a>
								</li>
								<li>
									<a href="#eur">EUR</a>
								</li>
								<li>
									<a href="#jbp">JBP</a>
								</li>
								<li>
									<a href="#jpy">JPY</a>
								</li>
							</ul>
						)}
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
