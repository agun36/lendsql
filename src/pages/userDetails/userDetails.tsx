// src/pages/userDetails/UserDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { UserTableProps } from '../../types/asideType';
import UserList from '../../components/userItems/userItems';
import './userDetails.scss';
const UserDetails: React.FC<UserTableProps> = ({ users, setFilteredUsers }) => {
    const { userId } = useParams<{ userId: string }>();
    const user = users.find(user => user.id === userId);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="user-details">

            <UserList users={users} setFilteredUsers={setFilteredUsers} setUsers={function (): void {
                throw new Error('Function not implemented.');
            }} filteredUsers={[]} />
            {/* Add more user details as needed */}


        </div>
    );
};

export default UserDetails;