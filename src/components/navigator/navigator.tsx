import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import '../../components/navigator/navigator.scss';
import '../../assets/styles/custom.scss';
import notify from '../../assets/np_notification_2425223_000000 1.svg';
import profile from '../../assets/avater.svg';
import dropdown from '../../assets/dropdown-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

interface User {
    id: string;
    profile: {
        company: string;
    };
    email: string;
    username: string;
    phone?: string;
    createdAt: string;
    status?: string;
    hasLoan?: boolean;
    hasSaving?: boolean;
}

interface NavigatorProps {
    users: User[];
    setFilteredUsers: (users: User[]) => void;
}

export default function Navigator({ users, setFilteredUsers }: NavigatorProps) {
    const [searchTerm, setSearchTerm] = useState('');

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

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav_logo">
                    <img src={logo} alt="company logo" />
                </div>
                <div className="header-nav_form-group">
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
                <a href="#" className='header-profile-doc'> Doc</a>
                <img src={notify} alt="notify the users" className='header-profile-notify' />
                <img src={profile} alt="showing profile users" className="header-profile-avater" />
                <p>Adedeji <img src={dropdown} alt="showing logout button" /></p>
            </nav>
        </header>
    );
}