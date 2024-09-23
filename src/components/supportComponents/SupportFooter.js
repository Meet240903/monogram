import React from 'react'
import footerLogo from '../../assets/images/supportImgs/footerLogo.svg'
import '../../assets/styles/supportPagesCSS/supportFooter.css'
import { Link } from 'react-router-dom'

const SupportFooter = () => {
    return (
        <>
            <div className='support-footer-page-section-container'>
                <div className='support-footer-page-section-left-content'>
                    <Link to='/support'>Monogram Support</Link>
                </div>
                <div className='support-footer-page-section-right-content'>
                    <img src={footerLogo} className='img-fluid' alt='footer-logo' />
                    <a href='#'>Powered by Zendesk</a>
                </div>
            </div>
        </>
    )
}

export default SupportFooter
