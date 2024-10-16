import React from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types/asideType';

interface UserDetailsProps {
    users: User[];
}

const UserDetails: React.FC<UserDetailsProps> = ({ users }) => {
    const { userId } = useParams<{ userId: string }>();
    const user = users.find(user => user.id === userId);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="user-details">
            <h2>User Details</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.profile.company}</p>
            <p>Status: {user.status}</p>
            {/* Add more user details as needed */}
        </div>
    );
};

export default UserDetails;