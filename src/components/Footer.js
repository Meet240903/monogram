import React from "react";
import "../assets/styles/footer.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome icons

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-col">
					<h3>Monogram</h3>
					<p>
						305 King St. W.
						<br /> Suite 502
						<br /> Kitchener, ON
						<br /> Canada
					</p>
				</div>

				<div className="footer-col">
					<h3>Quick Links</h3>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#how-it-works">How it Works</a>
						</li>
						<li>
							<a href="#shop">Shop</a>
						</li>
						<li>
							<a href="#download">Download</a>
						</li>
						<li>
							<a href="#help">Help</a>
						</li>
					</ul>
				</div>

				<div className="footer-col">
					<h3>FAQs</h3>
					<ul>
						<li>
							<a href="#support-center">Support Center</a>
						</li>
						<li>
							<a href="#shipping-sales">Shipping and Sales</a>
						</li>
						<li>
							<a href="#information">Information</a>
						</li>
					</ul>
				</div>

				<div className="footer-col">
					<h3>About Us</h3>
					<ul>
						<li>
							<a href="#work-with-us">Work with us</a>
						</li>
						<li>
							<a href="#privacy-policy">Privacy Policy</a>
						</li>
						<li>
							<a href="#terms-of-use">Terms of Use</a>
						</li>
						<li>
							<a href="#terms-of-sale">Terms of Sale</a>
						</li>
						<li>
							<a href="#press-kit">Press Kit</a>
						</li>
					</ul>
				</div>

				<div className="footer-col subscribe">
					<h3>Subscribe to Monogram</h3>
					<p>
						Master productivity with Creative Console and get all the latest
						Monogram news.
					</p>

					<label htmlFor="email">Your Email Address</label>
					<input type="email" id="email" placeholder="Email Address" />
					<button>Subscribe</button>
					<div className="social-icons">
						<FontAwesomeIcon icon={faFacebookF} className="icon" />
						{"     "}
						<FontAwesomeIcon icon={faTwitter} className="icon" />
						{"     "}
						<FontAwesomeIcon icon={faInstagram} className="icon" />
						{"     "}
					</div>
					<p>© Monogram 2024</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
