import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='form-container'>
            <div className='form-wraper'>
                <h3 className='form-title'>Signup</h3>
                <form action="">
                    <div className='form-control'>
                        <label htmlFor="">Email</label>
                        <br />
                        <input
                            type="text"
                            placeholder='Your email'
                            name='email'
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Password</label>
                        <br />
                        <input
                            type="password"
                            placeholder='Your email'
                            name='password'
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor=""> Confirm Password</label>
                        <br />
                        <input
                            type="password"
                            placeholder='Your email'
                            name='password'
                            required
                        />
                    </div>
                    <input className='submit-btn' type="submit" value="SignUp" />
                </form>
                <p className='redirect-link'>Already have an account? <Link to='/login'>Login</Link></p>
                <button className='submit-btn google-btn' type="submit" value="Login">Google</button>
            </div>
        </div>
    );
};

export default SignUp;