import React from 'react';
import logo from '../../assets/image/logo.svg';
import pabloLogin from '../../assets/image/pablo-sign-in.svg';
import UserForm from './userForm';
import './authform.scss';

const AuthForm: React.FC = () => {
    return (
        <section className="authform-user__form-details container">
            <div className='pablo-wrapper-logo container'>
                <img className='pablo-wrapper-logo-img' src={logo} alt="showing the company name" />
            </div>
            <div className='pablo-wrapper container'>

                <div className="flex-container">
                    <img src={pabloLogin} alt="Login illustration" className='pablo-login' />
                    <UserForm />
                </div>
            </div>
        </section>
    );
}

export default AuthForm;