import React from 'react';
import { NavLink } from 'react-router-dom';
import asideData from '../../libs/data';
import './aside.scss';

const AsideComponent: React.FC = () => {
    return (
        <aside className="dashboard-aside">
            {asideData.map((section, index) => (
                <div key={index}>

                    <ul>
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex} >
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
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
};

export default AsideComponent;