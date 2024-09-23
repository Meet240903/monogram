import React, { useState } from 'react';
import '../../assets/styles/supportPagesCSS/signinPage.css';
import twitterLogo from '../../assets/images/supportImgs/twitterLogo.svg';
import facebookLogo from '../../assets/images/supportImgs/facebookLogo.svg';
import googleLogo from '../../assets/images/supportImgs/googleLogo.svg';
import microsoftLogo from '../../assets/images/supportImgs/microsoftLogo.svg';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignInPage = () => {
    const [type,setType] = useState('password')
    const showPassword = ()=>{
        if(type === 'password'){
            setType('text')
        }else{
            setType('password')
        }
    }
    return (
        <>
            <div className='sign-in-page-section-container'>
                <div className='sign-in-page-section-title'>
                    <p>Sign in to Monogram</p>
                    <a href='#'>Switch to agent sign-in</a>
                </div>
                <div className='row mx-0 sign-in-page-section-content'>
                    <div className='col-md-6 sign-in-page-section-left-content'>
                        <div className='sign-in-page-section-left-content-social-media-box'>
                            <img src={twitterLogo} className='img-fluid' alt='logo' />
                            <p>Sign in with X Corp</p>
                        </div>
                        <div className='sign-in-page-section-left-content-social-media-box'>
                            <img src={facebookLogo} className='img-fluid' alt='logo' />
                            <p>Sign in with Facebook</p>
                        </div>
                        <div className='sign-in-page-section-left-content-social-media-box'>
                            <img src={googleLogo} className='img-fluid' alt='logo' />
                            <p>Sign in with Google</p>
                        </div>
                        <div className='sign-in-page-section-left-content-social-media-box'>
                            <img src={microsoftLogo} className='img-fluid' alt='logo' />
                            <p>Sign in with Microsoft</p>
                        </div>
                    </div>
                    <div className='col-md-6 sign-in-page-section-right-content'>
                        <div className='sign-in-page-section-right-content-form'>
                            <form>
                                <div className='sign-in-page-section-right-content-form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        className='sign-in-page-section-right-content-form-control'
                                        placeholder='Email'
                                        required
                                    />
                                </div>

                                <div className='sign-in-page-section-right-content-form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <div className='sign-in-page-section-right-content-input-group'>
                                        <input
                                            type={type}
                                            id='password'
                                            className='sign-in-page-section-right-content-form-control'
                                            placeholder='Password'
                                            required
                                        />
                                        <span className='sign-in-page-section-right-content-input-group-text'>
                                            <FaEye onClick={showPassword} />
                                        </span>
                                    </div>
                                </div>

                                <div className='sign-in-page-section-right-content-form-group'>
                                    <a href='#' className='forgot-password-link'>
                                        Forgot password?
                                    </a>
                                </div>

                                <button type='submit' className='sign-in-submit-button'>
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='sign-in-page-section-footer'>
                    <p>Emailed us for support? <a href='#'>Get a password</a></p>
                    <p>New to Monogram? <Link to='/sign-up'>Sign up</Link></p>
                </div>
            </div>
        </>
    );
};

export default SignInPage;
