import React from 'react';
import '../../assets/styles/supportPagesCSS/supportRequest.css';
import { FaGreaterThan, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SupportRequest = () => {
    return (
        <>
            <div className='support-request-section-container'>
                <div className='support-request-section-content'>
                    <div className='support-request-section-left-content'>
                        <div className='support-community-page-middle-section-breadcrumps'>
                            <Link to='/support'>Monogram Support</Link>
                            <FaGreaterThan className='community-greater-than-icon' />
                            <Link to='/support-request'>Submit a request</Link>
                        </div>
                        <div className='support-request-section-right-content-input-field'>
                            <input type='text' placeholder='Search' />
                            <FaSearch className='support-request-section-right-content-search-icon' />
                        </div>
                    </div>

                    {/* Form Starts Here */}
                    <div className='support-request-section-content-form'>
                        <h2>Submit a request</h2>
                        <form>
                            <div className='support-request-section-form-group'>
                                <label htmlFor='email'>Your email address <span className='required'>*</span></label>
                                <input type='email' id='email' className='support-request-section-form-control' required />
                            </div>

                            <div className='support-request-section-form-group'>
                                <label htmlFor='subject'>Subject <span className='required'>*</span></label>
                                <input type='text' id='subject' className='support-request-section-form-control' required />
                            </div>

                            <div className='support-request-section-form-group'>
                                <label htmlFor='description'>Description <span className='required'>*</span></label>
                                <textarea id='description' className='support-request-section-form-control' rows='5' required></textarea>
                                <small>Please enter the details of your request. A member of our support staff will respond as soon as possible.</small>
                            </div>

                            <div className='support-request-section-form-group'>
                                <label htmlFor='hardware'>Hardware <span className='required'>*</span></label>
                                <select id='hardware' className='support-request-section-form-control' required>
                                    <option value=''>Please select the hardware your request is about</option>
                                    <option value='Monogram Creative Console'>Monogram Creative Console</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>

                            <div className='support-request-section-form-group'>
                                <label>Attachments</label>
                                <label htmlFor='file-upload' className='support-request-section-file-upload'>
                                    <span>Add file or drop files here</span>
                                </label>
                                <input type='file' id='file-upload' className='support-request-section-form-control-file' />
                            </div>


                            <button type='submit' className='submit-btn'>Submit</button>
                        </form>
                    </div>
                    {/* Form Ends Here */}
                </div>
            </div>
        </>
    );
};

export default SupportRequest;
