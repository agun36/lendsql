import React from 'react';
// import './userDropdown.scss'; // Optional: add specific styling for the dropdown here

interface UserDropdownProps {
    onViewDetails: () => void;
    onActivateUser: () => void;
    onBlacklistUser: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ onViewDetails, onActivateUser, onBlacklistUser }) => {
    return (
        <div className="dropdown">
            <button onClick={onViewDetails}>View Details</button>
            <button onClick={onActivateUser}>Activate User</button>
            <button onClick={onBlacklistUser}>Blacklist User</button>
        </div>
    );
};

export default UserDropdown;
