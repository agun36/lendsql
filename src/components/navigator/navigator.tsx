import logo from '../../assets/logo.svg';
import '../../components/navigator/navigator.scss';
import '../../assets/styles/custom.scss';
import notify from '../../assets/np_notification_2425223_000000 1.svg'
import profile from '../../assets/avater.svg';
import dropdown from '../../assets/dropdown-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
export default function Navigator() {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav_logo">
                    <img src={logo} alt="company logo" />
                </div>
                <div className="header-nav_form-group d-none">
                    <input placeholder="Search for anything" />
                    <button type="button"><img src={searchIcon} alt="showing search users icon" /></button>
                </div>
            </nav>
            {/* User profile */}
            <nav className="header-profile">
                <a href="#" className='header-profile-doc'> Doc</a>
                <img src={notify} alt="notify the users" className='header-profile-notify' />
                <img src={profile} alt="showing profile users" className="header-profile-avater" />
                <p>Adedeji <img src={dropdown} alt="showing logout button" /></p>
            </nav>
        </header>
    )
}