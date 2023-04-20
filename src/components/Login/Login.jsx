import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form-wraper'>
                <h3 className='form-title'>Login</h3>
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
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p className='redirect-link'>New to Ema Jhon? <Link to='/signup'>Create and account</Link></p>
                <button className='submit-btn google-btn' type="submit" value="Login">Google</button>
            </div>
        </div>
    );
};

export default Login;