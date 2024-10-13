import React from 'react';
import { NavLink } from 'react-router-dom';
import asideData from '../../libs/data';
import './aside.scss';

const AsideComponent: React.FC = () => {
    return (
        <aside className="dashboard-aside">
            {asideData.map((section, index) => (
                <div key={index}>
                    <h2>{section.title}</h2>
                    <ul>
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                >
                                    <i className={link.icon}></i> {link.title}
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