import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have An Account <Link to='/login'>Login</Link> </p>
        </div>
    );
};

export default SignUp;