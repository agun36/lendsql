import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './userDashboard.scss';
import UserTable from '../../components/userTable/userTable';
import { User, UserTableProps } from '../../types/asideType';

const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
const dataToken = import.meta.env.PROD ? null : import.meta.env.VITE_REACT_APP_TOKEN;

const UserDashboard: React.FC<UserTableProps> = ({ setUsers, filteredUsers, setFilteredUsers }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
                console.log('API URL:', apiUrl);
                const response = await axios.get<User[]>(
                    apiUrl!,
                    {
                        headers: {
                            Authorization: `Bearer ${dataToken}`,
                        },
                    }
                );
                console.log('Response:', response);
                const usersWithStatus = response.data.map((user: User) => ({
                    ...user,
                    status: user.status || statuses[Math.floor(Math.random() * statuses.length)],
                    hasLoan: user.hasLoan || false,
                    hasSaving: user.hasSaving || false,
                }));
                setUsers(usersWithStatus);
                setFilteredUsers(usersWithStatus);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Failed to fetch user data.');
                setLoading(false);
            }
        };

        fetchUsers();
    }, [setUsers, setFilteredUsers]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="user-dashboard">
            <div className="main-content">
                <UserTable
                    users={filteredUsers}
                    setUsers={setUsers}
                    filteredUsers={filteredUsers}
                    setFilteredUsers={setFilteredUsers}
                />
            </div>
        </div>
    );
}
export default UserDashboard;