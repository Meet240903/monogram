import React, { useEffect, useRef, useState } from 'react';
import '../../assets/styles/home/meetTheModule.css';
import sectionImg1 from '../../assets/images/home/meetTheModuleImgs/sectionImg1.webp';
import sectionImg2 from '../../assets/images/home/meetTheModuleImgs/sectionImg2.webp';
import sectionImg3 from '../../assets/images/home/meetTheModuleImgs/sectionImg3.webp';
import sectionImg4 from '../../assets/images/home/meetTheModuleImgs/sectionImg4.webp';
import sectionImg5 from '../../assets/images/home/meetTheModuleImgs/sectionImg5.webp';
import sectionImg6 from '../../assets/images/home/meetTheModuleImgs/sectionImg6.png';

const MeetTheModule = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Monogram Core",
            contentData: [
                {
                    content: "The Core powers and connects Creative Console to your PC or Mac. Fast and smooth performance with two mechanical keys for switching and previewing the console’s functionality",
                }
            ]
        },
        {
            sectionImg: sectionImg2,
            title: "Orbiter",
            rowDirection: 'row-reverse',
            contentData: [
                {
                    content: "Expressive 2D and 3D control with a pressure-sensitive disc and an infinite encoder ring for smooth and precise adjustments.",
                },
                {
                    content: "Use it for: Tonal adjustments, color grading, smooth transport control, and more",
                },
            ]
        },
        {
            sectionImg: sectionImg3,
            title: "Dial",
            contentData: [
                {
                    content: "Three endless encoders with a built-in button for secondary functions. Control up to 135 programmable functions.",
                },
                {
                    content: "Use it for: Basics panel adjustments like exposure, temperature, tint, shadows/highlights, blacks/whites, or RGB color mixing in Photoshop",
                },
            ]
        },
        {
            sectionImg: sectionImg4,
            title: "Slider",
            rowDirection: 'row-reverse',
            contentData: [
                {
                    content: "Three smooth linear potentiometers for horizontal or vertical adjustments. Dynamically assign up to 45 programmable functions in one module.",
                },
                {
                    content: "Use it for: Brush tool, dodge and burn, zoom, real-time expressive control of virtual instruments",
                },
            ]
        },
        {
            sectionImg: sectionImg5,
            title: "Essential Keys",
            contentData: [
                {
                    content: "Three tactile mechanical switches to automate your most repetitive tasks. Assign up to 45 programmable functions and digitally label each on an on-screen display to bring up a preview on your screen.",
                },
                {
                    content: "Use it for: Quick access to your most frequently used hotkeys, macros, actions, or MIDI notes",
                },
            ]
        },
    ];

    const [visibleSections, setVisibleSections] = useState(Array(sectionData.length).fill(false));
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setVisibleSections((prev) => {
                            const newVisibleSections = [...prev];
                            newVisibleSections[index] = true;
                            return newVisibleSections;
                        });
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 });

        sectionRefs.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className='home-page-meet-module-section-container'>
            <div className='home-page-meet-module-section-title'>
                <h1>Meet each module</h1>
            </div>
            <div className='home-page-meet-module-section-content-scrollbar'>
                {sectionData.map((data, index) => (
                    <div
                        className={`row mx-0 home-page-meet-module-section-content ${visibleSections[index] ? 'fade-in' : ''}`}
                        key={index}
                        style={{ flexDirection: data.rowDirection || '' }}
                        ref={el => sectionRefs.current[index] = el}
                    >
                        <div className='col-md-6 home-page-meet-module-section-left-content'>
                            <img src={data.sectionImg} className='img-fluid' alt='section-img' />
                        </div>
                        <div className='col-md-6 home-page-meet-module-section-right-content'>
                            <h1>{data.title}</h1>
                            {data.contentData.map((content, index) => (
                                <div key={index}>
                                    <p>{content.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='home-page-meet-module-bottom-section-container'>
                <div className='home-page-meet-module-bottom-section-img'>
                    <img src={sectionImg6} className='img-fluid' alt='section-bottom-img' />
                </div>
                <h2>Trust the Quality, Love the Look</h2>
                <p>Creatives spend hours editing and their tools should withstand every minute. That’s why each module is made from the highest quality materials including CNC-machined aluminum, neodymium magnets and gold-plated connections that will not only look beautiful on your desk but will also last.</p>
                <button>Shop now</button>
            </div>
        </div>
    );
}

export default MeetTheModule;
