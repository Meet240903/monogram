import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../../assets/styles/supportPagesCSS/communitypagesCSS/supportCommunityMiddleSection.css'

const SupportCommunityMiddleSection = () => {
    const sectionData = [
        { title: "General Discussion" },
        { title: "Profile Exchange" },
        { title: "Feature Requests" },
        { title: "Photography" },
        { title: "Film & Video" },
        { title: "Design" },
        { title: "Music" },
        { title: "Creator Beta and Alpha" },
        { title: "Palette" },
    ]
    return (
        <>
            <div className='support-community-page-middle-section-container'>
                <div className='support-community-page-middle-section-breadcrumps'>
                    <Link to='/support'>Monogram Support</Link>
                    <FaGreaterThan className='community-greater-than-icon' />
                    <Link to='/support-community'>Community</Link>
                </div>
                <div className='support-community-page-middle-section-button'>
                    <button>Ask a Question</button>
                </div>
                <div className='support-community-page-middle-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='support-community-page-middle-section-content-boxs' key={index}>
                                <h4>{data?.title}</h4>
                            </div>
                        ))
                    }
                </div>
                <hr />
            </div>
        </>
    )
}

export default SupportCommunityMiddleSection
