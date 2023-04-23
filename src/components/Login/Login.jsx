import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../public/google.png'
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const [loginError, SetLoginError] = useState('')
    const { signIn } = useContext(AuthContext)
    console.log(location)

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => SetLoginError(error.message))
    }

    return (
        <div className='form-container'>
            <div className='form-wraper'>
                <h3 className='form-title'>Login</h3>
                <form onSubmit={handelLogin} action="">
                    <div className='form-control'>
                        <label htmlFor="">Email</label>
                        <br />
                        <input
                            type="email"
                            placeholder='Your email'
                            name='email'
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Password</label>
                        <br />
                        <input
                            type={show ? 'text' : "password"}
                            placeholder='Your email'
                            name='password'
                            required
                        />
                    </div>
                    <p onClick={() => setShow(!show)}>
                        {show ? 'Hide password' : 'show password'}
                    </p>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p className='redirect-link'>New to Ema Jhon? <Link to='/signup'>Create and account</Link></p>

                {
                    loginError && <p className='error-text'>{error}</p>
                }
                <button className='submit-btn google-btn' type="submit" value="Login">
                    <img src={google} alt="" />
                    Continew With Google
                </button>
            </div>
        </div>
    );
};

export default Login;