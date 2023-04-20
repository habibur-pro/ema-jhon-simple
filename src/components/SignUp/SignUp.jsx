import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import google from '../../../public/google.png'
import { AuthContext } from '../providers/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)

    const handelSignUP = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('password and confirm password not matched')
            return
        }
        else if (password.length < 6) {
            setError('password will be 6 charecter and upper')
            return
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => setError(error.message))
        // console.log(email, password, confirmPassword)
    }

    return (
        <div className='form-container'>
            <div className='form-wraper'>
                <h3 className='form-title'>Signup</h3>
                <form onSubmit={handelSignUP} action="">
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
                            name='confirmPassword'
                            required
                        />
                    </div>
                    <input className='submit-btn' type="submit" value="SignUp" />
                </form>
                <p className='redirect-link'>Already have an account? <Link to='/login'>Login</Link></p>
                {
                    error && <p className='error-text'>{error}</p>
                }
                <button className='submit-btn google-btn' type="submit" value="Login">
                    <img src={google} alt="" />
                    Continew With Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;