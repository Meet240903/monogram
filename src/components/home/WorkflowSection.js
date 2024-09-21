import React, { useState } from 'react';
import '../../assets/styles/home/workflowSection.css';
import sectionImg1 from '../../assets/images/home/workflowSectionImgs/sectionImg1.webp';
import sectionImg2 from '../../assets/images/home/workflowSectionImgs/sectionImg2.webp';
import sectionImg3 from '../../assets/images/home/workflowSectionImgs/sectionImg3.webp';
import sectionImg4 from '../../assets/images/home/workflowSectionImgs/sectionImg4.webp';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const WorkflowSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionData = [
        {
            backgroundImg: sectionImg1,
            title: "Audio and Music Production",
            content: "Add dynamic expression and a tactile experience to your digital music composition with Creative Console. Personalize your compositions and productions with the uniquely modular toolset that can be used with Digital Audio Workstations.",
        },
        {
            backgroundImg: sectionImg2,
            title: "Photo Editing and Retouching",
            content: "See how Creative Console can streamline your entire photo editing and retouching workflow from start to finish.",
        },
        {
            backgroundImg: sectionImg3,
            title: "Video Editing and Color",
            content: "Video Console is a powerful tool that gives you the flexibility to both edit and color grade with unmatched precision.",
        },
        {
            backgroundImg: sectionImg4,
            title: "Everyday Essentials",
            content: "With Mini Console, Monogram makes interacting with common everyday apps like Zoom and Chrome easier and more fun to use.",
        },
    ];

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sectionData.length);
            setTimeout(() => setIsTransitioning(false), 500); // Duration should match CSS transition time
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + sectionData.length) % sectionData.length);
            setTimeout(() => setIsTransitioning(false), 500); // Duration should match CSS transition time
        }
    };

    return (
        <div className='home-page-workflow-section-container'>
            <div className='home-page-workflow-section-title'>
                <h2>Made just for You</h2>
                <p>Creative Console was designed with your workflow in mind. Pre-loaded functionality and direct software integrations perfectly combine to improve editing and increase efficiency. Select your workflow below to explore now.</p>
            </div>
            <div
                className={`home-page-workflow-section-content ${isTransitioning ? 'home-page-workflow-slide-enter' : ''}`}
                style={{
                    backgroundImage: `url(${sectionData[currentIndex].backgroundImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className='home-page-workflow-section-content-details'>
                    <h2>{sectionData[currentIndex].title}</h2>
                    <p>{sectionData[currentIndex].content}</p>
                    <button>learn more</button>
                </div>
            </div>
            <FaLessThan onClick={handlePrev} className='home-page-workflow-sllider-left-btn' />
            <FaGreaterThan onClick={handleNext} className='home-page-workflow-sllider-right-btn' />
        </div>
    );
};

export default WorkflowSection;
