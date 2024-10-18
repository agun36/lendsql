import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import asideData from '../../libs/data';
import './MobileAside.scss';
import { MobileAsideProps } from '../../types/asideType';



const MobileAside: React.FC<MobileAsideProps> = ({ isVisible, onClose }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
        onClose();
    };

    return (
        <div className={`mobile-aside ${isVisible ? 'visible' : ''}`}>
            <div className="mobile-aside-header">
                <button className="close-button" onClick={onClose}>×</button>
            </div>
            <div className="mobile-aside-content">
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
                                            onClick={onClose}
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
            </div>
        </div>
    );
};

export default MobileAside;