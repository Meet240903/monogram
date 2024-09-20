import React from "react";
import "../../assets/styles/home/homemonogram.css"; // External CSS file
import sectionImg1 from '../../assets/images/home/homeMonogramImgs/sectionImg1.webp'
import sectionImg2 from '../../assets/images/home/homeMonogramImgs/sectionImg2.webp'
import sectionImg3 from '../../assets/images/home/homeMonogramImgs/sectionImg3.webp'
import sectionImg4 from '../../assets/images/home/homeMonogramImgs/sectionImg4.webp'
import sectionImg5 from '../../assets/images/home/homeMonogramImgs/sectionImg5.webp'
import sectionImg6 from '../../assets/images/home/homeMonogramImgs/sectionImg6.webp'

const ScrollingImages = () => {
	return (
		<div className="home-page-why-monogram-section-container">
			<div className="home-page-why-monogram-section-left-content">
				<div className="home-page-why-monogram-section-left-content-img1">
					<img src={sectionImg1} className="img-fluid" alt="monogram-img" />
				</div>
				<div className="home-page-why-monogram-section-left-content-details1">
					<h3>True Creative Freedom</h3>
					<p>Combine modules in any shape or size and optimize for your personal workflow and style. Easily expand your console by adding or swapping modules as needed, without replacing the entire system.</p>
				</div>
				<div className="home-page-why-monogram-section-left-content-img2">
					<img src={sectionImg4} className="img-fluid" alt="monogram-img" />
				</div>
				<div className="home-page-why-monogram-section-left-content-details2">
					<h3>Plug & Play</h3>
					<p>Creative Console comes pre-loaded with functionality for industry-leading software. Plug in, select your app, and start creating. It’s that simple!</p>
				</div>
				<div className="home-page-why-monogram-section-left-content-img3">
					<img src={sectionImg6} className="img-fluid" alt="monogram-img" />
				</div>
			</div>
			<div className="home-page-why-monogram-section-right-content">
				<div className="home-page-why-monogram-section-right-content-img1">
					<img src={sectionImg2} className="img-fluid" alt="monogram-img" />
				</div>
				<div className="home-page-why-monogram-section-right-content-details1">
					<h3>Creative Expression Re-imagined</h3>
					<p>Monogram’s tactile tools help you engage with your work in a more creative and expressive way. Immerse yourself in the creative process with intuitive control.</p>
				</div>
				<div className="home-page-why-monogram-section-right-content-img2">
					<img src={sectionImg3} className="img-fluid" alt="monogram-img" />
				</div>
				<div className="home-page-why-monogram-section-right-content-details2">
					<h3>Faster and more Precise</h3>
					<p>Creative Console puts your most used tools at your fingertips, cutting your editing time in half. Avoid wrist fatigue while gaining pinpoint precision.</p>
				</div>
				<div className="home-page-why-monogram-section-right-content-img3">
					<img src={sectionImg5} className="img-fluid" alt="monogram-img" />
				</div>
			</div>
		</div>
	);
};

export default ScrollingImages;
