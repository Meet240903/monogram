import React, { useState } from 'react'
import '../../assets/styles/home/reviewsSection.css'
import sliderImg1 from '../../assets/images/home/reviewSectionImgs/sliderImg1.webp'
import sliderImg2 from '../../assets/images/home/reviewSectionImgs/sliderImg2.webp'
import sliderImg3 from '../../assets/images/home/reviewSectionImgs/sliderImg3.webp'
import sliderImg4 from '../../assets/images/home/reviewSectionImgs/sliderImg4.webp'
import sectionImg1 from '../../assets/images/home/reviewSectionImgs/sectionImg1.webp'
import sectionImg2 from '../../assets/images/home/reviewSectionImgs/sectionImg2.webp'
import sectionImg3 from '../../assets/images/home/reviewSectionImgs/sectionImg3.webp'
import sectionImg4 from '../../assets/images/home/reviewSectionImgs/sectionImg4.webp'
import sectionImg5 from '../../assets/images/home/reviewSectionImgs/sectionImg5.webp'
import sectionImg6 from '../../assets/images/home/reviewSectionImgs/sectionImg6.webp'
import sectionImg7 from '../../assets/images/home/reviewSectionImgs/sectionImg7.webp'
import sectionImg8 from '../../assets/images/home/reviewSectionImgs/sectionImg8.webp'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionData = [
        {
            sliderImg: sliderImg1,
            content: "Monogram gives filmmakers precise and intuitive control over virtual cameras and lighting in Cine Tracer.  For Unreal Engine Virtual Production users and developers, the Monogram Creator app and UE4 makes integration seamless and easy through the Blueprint Scripting system.",
            footerContent: "Matt Workman, Virtual Production Cinematographer and Developer",
        },
        {
            sliderImg: sliderImg2,
            content: "Tactile tools like Monogram will help us pave the way for new and interactive experiences where both technical and non-technical crew members can easily and actively participate in the filmmaking process thereby streamlining production time.",
            footerContent: "Gary Marshall, Creative Technology Supervisor, Visual Effects Designer",
        },
        {
            sliderImg: sliderImg3,
            content: "Creative Console offers operators a highly flexible control solution, and the ability to pick and choose modules and change them as needed is very elegant. Creative Console is a very easy-to-use and intuitive system that’s perfect for broadcasters working with Ross Video’s UX control platform and Voyager graphics rendering solution.",
            footerContent: "Gideon Ferber, Ross Video’s Director of Virtual Solutions",
        },
        {
            sliderImg: sliderImg4,
            content: "Monogram's tactile, precision tools are one of the essential tools we use to bring a physical touch to the digital worlds",
            footerContent: "AJ Sciutto, Virtual Production Producer",
        },
    ]

    const sectionSeenData = [
        {
            sectionImg: sectionImg1,
        },
        {
            sectionImg: sectionImg2,
        },
        {
            sectionImg: sectionImg3,
        },
        {
            sectionImg: sectionImg4,
        },
        {
            sectionImg: sectionImg5,
        },
        {
            sectionImg: sectionImg6,
        },
        {
            sectionImg: sectionImg7,
        },
        {
            sectionImg: sectionImg8,
        },
    ]
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
        <>
            <div className='home-page-reviews-section-container'>
                <div className='home-page-reviews-section-title'>
                    <h3>Trusted by Photo and Video Professionals</h3>
                </div>
                <div className={`home-page-reviews-section-content ${isTransitioning ? 'home-page-reviews-slide-enter' : ''}`}>
                    <img src={sectionData[currentIndex].sliderImg} className='img-fluid' alt='slider-img' />
                    <p>"{sectionData[currentIndex].content}"</p>
                    <small>- {sectionData[currentIndex].footerContent}</small>
                </div>
                <FaLessThan onClick={handlePrev} className='home-page-review-sllider-left-btn' />
                <FaGreaterThan onClick={handleNext} className='home-page-review-sllider-right-btn' />
                <div className='home-page-reviews-section-title'>
                    <h3>As Seen On</h3>
                </div>
                <div className='home-page-reviews-as-seen-on-section-content'>
                    {
                        sectionSeenData?.map((data, index) => (
                            <div className='home-page-reviews-as-seen-on-section-content-imgs' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ReviewsSection
