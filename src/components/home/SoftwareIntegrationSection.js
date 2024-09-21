import React, { useState, useEffect } from 'react';
import bgImg from '../../assets/images/home/softwareIntegrationSectionImgs/backgroundImg.webp';
import sectionImg1 from '../../assets/images/home/softwareIntegrationSectionImgs/SectionImg1.png';
import sectionImg2 from '../../assets/images/home/softwareIntegrationSectionImgs/SectionImg2.png';
import sectionImg3 from '../../assets/images/home/softwareIntegrationSectionImgs/SectionImg3.png';
import sectionImg4 from '../../assets/images/home/softwareIntegrationSectionImgs/sectionImg4.png';
import sectionImg5 from '../../assets/images/home/softwareIntegrationSectionImgs/sectionImg5.png';
import sectionImg6 from '../../assets/images/home/softwareIntegrationSectionImgs/sectionImg6.png';
import sectionImg7 from '../../assets/images/home/softwareIntegrationSectionImgs/sectionImg7.png';
import sectionImg8 from '../../assets/images/home/softwareIntegrationSectionImgs/sectionImg8.png';
import '../../assets/styles/home/softwareIntegration.css';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';

const SoftwareIntegrationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  const sliderData = [
    { sectionImg: sectionImg1 },
    { sectionImg: sectionImg2 },
    { sectionImg: sectionImg3 },
    { sectionImg: sectionImg4 },
    { sectionImg: sectionImg5 },
    { sectionImg: sectionImg6 },
    { sectionImg: sectionImg7 },
    { sectionImg: sectionImg8 },
  ];

  // Auto-play functionality for slider
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  // Function to handle next slide with animation
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Match the CSS transition duration
  };

  // Function to handle previous slide with animation
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Match the CSS transition duration
  };

  return (
    <div className="home-page-software-integration-section-container">
      <div className="home-page-software-integration-section-title">
        <h2>Powerful Native Integrations</h2>
        <p>
          Integrates directly to your favorite software for the highest level of precision and control.
        </p>
      </div>
      <div className="home-page-software-integration-section-content">
        <div className="home-page-software-integration-section-bgimg">
          <img src={bgImg} className="software-integration-section-bgimg" alt="section-img" />
          <div className="home-page-software-integration-section-slider">
            <div
              className={`software-integration-section-slider ${isAnimating ? 'animating' : ''
                }`}
            >
              <img
                src={sliderData[currentIndex].sectionImg}
                className="img-fluid software-integration-slider-img"
                alt="section-img"
              />
            </div>
            <button
              className="software-integration-section-slider-btn software-integration-section-prev-btn"
              onClick={handlePrev}
              disabled={isAnimating}
            >
              <FaLeftLong />
            </button>
            <button
              className="software-integration-section-slider-btn software-integration-section-next-btn"
              onClick={handleNext}
              disabled={isAnimating}
            >
              <FaRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareIntegrationSection;
