import React from 'react'
import headerLogo from '../../assets/images/supportImgs/headerLogo.png'
import '../../assets/styles/supportPagesCSS/supportHeader.css'
import { Link } from 'react-router-dom'

const SupportHeader = () => {
    return (
        <>
            <div className='support-header-section-container'>
                <div className='support-header-logo-section'>
                    <Link to='/'>
                        <img src={headerLogo} className='img-fluid' alt='monogram-logo' />
                    </Link>
                </div>
                <div className='support-header-right-content'>
                    <Link to='/support-community'>Community</Link>
                    <Link to='/support-request'>Submit a request</Link>
                    <Link to='/sign-in'>Sign in</Link>
                </div>
            </div>
        </>
    )
}

export default SupportHeader
