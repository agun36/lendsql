import logo from '../../assets/logo.svg'
import pabloLogin from '../../assets/pablo-sign-in.svg'
import UserForm from './userForm'
export default function AuthForm() {
    return <section className="authform-user_form__details container">
        <aside className="pablo-wrapper container">
            <img src={logo} alt="showing the company name" className='pablo-wrapper-logo' />
            <img src={pabloLogin} alt="" className='pablo-login' />
        </aside>
        <UserForm />
    </section>
}