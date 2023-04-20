import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form-wraper'>
                <h3>Please Login</h3>
                <form action="">
                    <div>
                        <label htmlFor="">Email</label>
                        <br />
                        <input
                            type="text"
                            placeholder='Your email'

                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;