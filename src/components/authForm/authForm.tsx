import React from 'react'
import logo from '../../assets/image/logo.svg'
import pabloLogin from '../../assets/image/pablo-sign-in.svg'
import UserForm from './userForm'
import './authform.scss'
const AuthForm: React.FC = () => {
    return <section className="authform-user_form__details container">
        <aside className="pablo-wrapper container">
            <img src={logo} alt="showing the company name" className='pablo-wrapper-logo' />
            <img src={pabloLogin} alt="" className='pablo-login' />
        </aside>
        <UserForm />
    </section>
}

export default AuthForm