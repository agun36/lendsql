import React, { useState } from "react";
import { User } from "../../types/asideType";
import './userTableMobile.scss';
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface UserTableMobileProps {
    users: User[];
}

const UserTableMobile: React.FC<UserTableMobileProps> = ({ users }) => {
    const [expandedUserId, setExpandedUserId] = useState<string | null>(null);

    const toggleDetails = (userId: string) => {
        setExpandedUserId(expandedUserId === userId ? null : userId);
    };

    return (
        <div className="user-table-mobile desktop-hide">
            {users.map((user) => (
                <div key={user.id} className="user-card">
                    <div className="user-card-header">
                        <div className="user-card-header-info">
                            <p className="user-name">{user.username}</p>
                            <p className="user-status">{user.status}</p>
                        </div>
                        <button className="toggle-details" onClick={() => toggleDetails(user.id)}>
                            {expandedUserId === user.id ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                        </button>
                    </div>

                    {expandedUserId === user.id && (
                        <div className="user-card-details">
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
                            <p><strong>Organization:</strong> {user.profile.company}</p>
                            <p><strong>Date Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                            <p><strong>Loans:</strong> {user.loans && user.loans.length > 0 ? user.loans.length : 'No loans'}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserTableMobile;
