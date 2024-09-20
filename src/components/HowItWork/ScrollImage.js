import React, { useState, useEffect, useRef } from "react";
import "../../assets/styles/HowItWork/scrollimage.css";

const ZoomImage = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	// Effect to track scroll position
	useEffect(() => {
		const handleScroll = () => {
			if (isVisible) {
				const position = window.scrollY;
				setScrollPosition(position);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isVisible]);

	// Use Intersection Observer to detect when the section is visible
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.9 } // Adjust this threshold based on when you want the effect to start
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	// Adjust background image zoom based on scroll position with zoom out and zoom in effect
	const zoomOutLimit = 100; // Distance to zoom out
	const zoomInLimit = 800; // Distance to zoom in
	let zoomLevel = 1;

	if (isVisible) {
		if (scrollPosition < zoomOutLimit) {
			// Zoom out
			zoomLevel = 2 - scrollPosition / zoomOutLimit;
		} else if (scrollPosition < zoomInLimit) {
			// Zoom in
			zoomLevel =
				1 + (scrollPosition - zoomOutLimit) / (zoomInLimit - zoomOutLimit);
		} else {
			zoomLevel = 2; // Limit zoom level
		}
	}

	return (
		<>
			<div className="container-scrolling" ref={sectionRef}>
				<div
					className="background-scrolling"
					style={{
						transform: `scale(${zoomLevel})`,
					}}
				></div>
				<div className="content-scrolling">
					<h1>Unlock the Full Potential of Creative Software</h1>
					<p>
						Creative Console integrates directly into industry-leading editing
						software, creating a powerful software ecosystem for every aspect of
						your workflow. Monogram Creator app supports both native and
						universal compatibility.
					</p>
				</div>
			</div>
		</>
	);
};

export default ZoomImage;
