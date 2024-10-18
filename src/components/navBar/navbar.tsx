import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.svg';
import dropdown from '../../assets/image/dropdown-icon.svg';
import notify from '../../assets/image/np_notification_2425223_000000 1.svg';
import profile from '../../assets/image/avater.svg';
import searchIcon from '../../assets/image/search-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../../components/navBar/navbar.scss';
import '../../assets/styles/custom.scss';
import { NavigatorProps } from '../../types/asideType';
import MobileAside from './mobileSide';


export default function Navigator({ users, setFilteredUsers }: NavigatorProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [username, setUsername] = useState<string | null>(null);
    const [isMobileAsideVisible, setIsMobileAsideVisible] = useState(false); // State to manage mobile aside visibility
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        const filteredUsers = users.filter(user =>
            user.username.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.profile.company.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    const toggleMobileAside = () => {
        setIsMobileAsideVisible(prevState => !prevState);
    };

    return (
        <div className="container">
            <div className="header">
                <nav className="header-nav">
                    <div className="header-nav_logo ">
                        <img src={logo} alt="company logo" />
                    </div>
                    <div className="header-nav_form-group mobile-hide">
                        <input
                            placeholder="Search for anything"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="button"><img src={searchIcon} alt="showing search users icon" /></button>
                    </div>
                </nav>
                {/* User profile */}
                <nav className="header-profile">
                    <a href="#" className='header-profile-doc mobile-hide'> Doc</a>
                    <img src={notify} alt="notify the users" className='header-profile-notify mobile-hide' />
                    <img src={profile} alt="showing profile users" className="header-profile-avater mobile-hide" />
                    <p className='mobile-hide'>{username} <img src={dropdown} alt="showing logout button" onClick={handleLogout} /></p>
                    <button className="header-nav_hamburger mobile-show" onClick={toggleMobileAside}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </nav>
            </div>
            <MobileAside isVisible={isMobileAsideVisible} onClose={toggleMobileAside} />
        </div>
    );
}