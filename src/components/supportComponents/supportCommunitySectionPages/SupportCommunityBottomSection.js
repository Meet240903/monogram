import React from 'react'
import '../../../assets/styles/supportPagesCSS/communitypagesCSS/supportCommunityBottomSection.css'
import { FaComment } from 'react-icons/fa'

const SupportCommunityBottomSection = () => {
    const sectionData = [
        {
            title: "Feature Requests",
            content: "Shortcut directly to specific Profile",
            months: 4,
            comments: 6,
        },
        {
            title: "Palette",
            content: "Need assistance with Palette Gear compatibility",
            months: 5,
            comments: 3,
        },
        {
            title: "Palette",
            content: "Pallette Gear. Help plz.",
            months: 5,
            comments: 4,
        },
        {
            title: "General Discussion",
            content: "Palette Gear end of life?",
            months: 5,
            comments: 4,
        },
        {
            title: "General Discussion",
            content: "Is there a way to connect two monograms together",
            months: 6,
            comments: 1,
        },
    ]
    return (
        <>
            <div className='support-community-page-bottom-section-container'>
                <div className='support-community-page-bottom-section-title'>
                    <h4>Recent activity (Community)</h4>
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='support-community-page-bottom-section-content' key={index}>
                            <div className='support-community-page-bottom-section-left-content'>
                                <a href='#'>{data?.title}</a>
                                <p>{data?.content}</p>
                            </div>
                            <div className='support-community-page-bottom-section-right-content'>
                                <small>Comment added {data?.months} ago &nbsp;&nbsp;<FaComment /> {data?.comments}</small>
                            </div>
                        </div>
                    ))
                }
                <div className='support-community-page-bottom-section-bottom-body'>
                    <p>Didn't find what you were looking for?</p>
                    <button>Ask a Question</button>
                </div>
            </div>
        </>
    )
}

export default SupportCommunityBottomSection
