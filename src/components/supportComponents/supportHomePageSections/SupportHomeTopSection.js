import React from 'react'
import '../../../assets/styles/supportPagesCSS/supportHomePageCSS/supportHomeTopSection.css'
import { FaSearch } from 'react-icons/fa'

const SupportHomeTopSection = () => {
  return (
    <>
      <div className='support-home-page-top-section-container'>
        <div className='support-home-page-top-section-content'>
            <input type='text' placeholder='Hey, How can we help?' />
            <FaSearch className='support-home-page-top-section-search-icon' />
        </div>
      </div>
    </>
  )
}

export default SupportHomeTopSection
