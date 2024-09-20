import React, { useEffect, useState } from "react";
import "../../assets/styles/home/homemonogram.css"; // External CSS file
import img1 from "../../assets/images/home/monogram_left.jpg";
import img2 from "../../assets/images/home/monogram_right.jpg";
import img3 from "../../assets/images/home/monogram_second_left.jfif";
import img4 from "../../assets/images/home/monogram_second_right.jfif";
import img5 from "../../assets/images/home/monogram_fourth.webp"; // Add more as needed

const ScrollingImages = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [leftImageStop, setLeftImageStop] = useState(false);
	const [rightImageStop, setRightImageStop] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setScrollPosition(scrollTop);

		// Stop logic for left and right images based on scroll position
		if (scrollTop > 500 && scrollTop < 1000) {
			setLeftImageStop(true);
		} else {
			setLeftImageStop(false);
		}

		if (scrollTop > 1000) {
			setRightImageStop(true);
		} else {
			setRightImageStop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="scroll-container-monogram">
			{/* Left Column */}
			<div className="left-column-monogram">
				<img
					src={img1}
					alt="Left Image 1"
					className={`image ${leftImageStop ? "stopped" : "scrolling"}`}
				/>
				<img src={img2} alt="Left Image 2" className="image" />
				<img src={img3} alt="Left Image 3" className="image" />
				<img src={img4} alt="Left Image 4" className="image" />
				{/* Add more images as needed */}
			</div>

			{/* Right Column */}
			<div className="right-column-monogram">
				<img src={img1} alt="Right Image 1" className="image scrolling" />
				<img
					src={img2}
					alt="Right Image 2"
					className={`image ${rightImageStop ? "stopped" : "scrolling"}`}
				/>
				<img src={img3} alt="Right Image 3" className="image scrolling" />
				<img src={img4} alt="Right Image 4" className="image scrolling" />
				{/* Add more images as needed */}
			</div>
		</div>
	);
};

export default ScrollingImages;
