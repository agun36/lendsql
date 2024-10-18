import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import asideData from '../../libs/data';
import './aside.scss';

interface AsideComponentProps {
    isAsideVisible: boolean;
}

const AsideComponent: React.FC<AsideComponentProps> = ({ isAsideVisible }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <aside className={`dashboard-aside ${isAsideVisible ? 'visible' : 'mobile-hide-button'}`}>
            {asideData.map((section, index) => (
                <div key={index}>
                    <ul>
                        {section.title !== "Dashboard" && section.title !== "Logout" && section.title !== "Switch Organization" && <p>{section.title}</p>}
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex} className={link.className ? link.className : ''}>
                                {link.type === 'button' ? (
                                    <button onClick={handleLogout} className="logout-button">
                                        <img className="link-icon" src={link.icon} alt={`${link.title} icon`} />
                                        <span className="link-title">{link.title}</span>
                                    </button>
                                ) : (
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => isActive ? 'active-link' : ''}
                                    >
                                        <img className="link-icon" src={link.icon} alt={`${link.title} icon`} />
                                        <span className="link-title">{link.title}</span>
                                        {link.dropdownIcon && (
                                            <img className="dropdown-icon" src={link.dropdownIcon} alt="Dropdown icon" />
                                        )}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
};

export default AsideComponent;