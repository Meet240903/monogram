import React from 'react'
import '../../../assets/styles/supportPagesCSS/supportHomePageCSS/supportHomeMiddleSection.css'

const SupportHomeMiddleSection = () => {
    const sectionData = [
        {
            title: "Getting Started",
            content: "Get started by setting up your Monogram Creative Console",
            gridColSpan: 'span 2'
        },
        {
            title: "Using Monogram",
            content: "How to create profiles, assign functions, and do some cool things with your Monogram Creative Console",
            gridColSpan: 'span 2'
        },
        {
            title: "Troubleshooting",
            content: "Find some answers to common troubleshooting issues",
            gridColSpan: 'span 2'
        },
        {
            title: "Community",
            content: "Join the community and find user based answers and questions about Monogram and Palette",
            gridColSpan: 'span 3'
        },
        {
            title: "FAQ",
            content: "FAQ's about Hardware, Software, and Shipping & Delivery",
            gridColSpan: 'span 3'
        },
    ]
    return (
        <>
            <div className='support-home-page-middle-section-container'>
                <div className='support-home-page-middle-section-title'>
                    <h2>Welcome to Monogram Support</h2>
                </div>
                <div className='support-home-page-middle-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='support-home-page-middle-section-content-box' key={index}
                                style={{
                                    gridColumn: data?.gridColSpan
                                }}
                            >
                                <h4>{data?.title}</h4>
                                <p>{data?.content}</p>
                            </div>
                        ))
                    }
                </div>
                <hr />
            </div>
        </>
    )
}

export default SupportHomeMiddleSection
