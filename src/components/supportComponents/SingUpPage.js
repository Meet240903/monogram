import React from 'react'
import '../../assets/styles/supportPagesCSS/signupPage.css'
import { Link } from 'react-router-dom';

const SingUpPage = () => {
    return (
        <>
            <div className='sign-up-page-section-container'>
                <div className='sign-up-page-section-title'>
                    <p>Sign up to Monogram</p>
                    <small>Please fill out this form, and we'll send you a welcome email so you can verify your email address and sign in.</small><br />
                    <small>Required fields are marked by an asterisk (*)</small>
                </div>
                <div className='sign-up-section-form'>
                    <form>
                        <div className='sign-up-section-form-group'>
                            <label htmlFor='email'>Your full name</label>
                            <input
                                type='email'
                                id='email'
                                className='sign-up-section-form-control'
                                required
                            />
                        </div>
                        <div className='sign-up-section-form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                className='sign-up-section-form-control'
                                required
                            />
                        </div>

                        <button type='submit' className='sign-in-submit-button'>
                            Sign up
                        </button>
                    </form>
                </div>
                <div className='sign-up-page-footer-section'>
                    <Link to='/sign-in'>Cancel</Link>
                </div>
            </div>
        </>
    )
}

export default SingUpPage;
