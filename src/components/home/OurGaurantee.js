import React from "react";
import sectionImg from "../../assets/images/home/ourGauranteeSectionImgs/sectionImg.png";
import "../../assets/styles/home/ourGauranteeSection.css";

const OurGaurantee = () => {
	return (
		<div className="home-page-our-gaurantee-section-container">
			<div className="home-page-our-gaurantee-section-overlay"></div>
			<div className="home-page-our-gaurantee-section-content">
				<div className="home-page-our-gaurantee-section-content-img">
					<img src={sectionImg} className="img-fluid" alt="section-img" />
				</div>
				<p>
					We understand that everyone’s workflow is different, and even the most
					adaptable tool ever may not always fit. That’s why you can try
					Monogram Creative Console in your own workflow for 100 days. If it
					does not improve your editing experience, you can return it for a full
					refund.
				</p>
				<div className="home-page-our-gaurantee-section-content-button">
					<button>try now</button>
				</div>
			</div>
		</div>
	);
};

export default OurGaurantee;
