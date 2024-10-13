import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userTable.scss';

interface User {
    id: string;
    profile: {
        name: string;
        company: string; // Organization
        dob: string; // Date joined (we can use dob or createdAt)
    };
    username: string;
    email: string;
    phone?: string; // If phone number is available in your data structure
    roles: string[];
    createdAt: string; // Date joined
    status?: string; // Status, if available
}

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch users from the API
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://api.json-generator.com/templates/fjPdmz5djROe/data',
                    {
                        headers: {
                            Authorization: 'Bearer wpdltskz1aqsjqsa60b2y0y2nsbmwnwoc0425rev', // Replace with your JSON Generator API key
                        },
                    }
                );
                setUsers(response.data); // Store the fetched data in state
                setLoading(false);
            } catch {
                setError('Failed to fetch user data.');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>Organization</th>
                    <th>Username</th>
                    <th>Phone Number</th>
                    <th>Date Joined</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.profile.company}</td>
                        <td>{user.username}</td>
                        <td>{user.phone ? user.phone : 'N/A'}</td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                        <td>{user.status ? user.status : 'Active'}</td> {/* Default to 'Active' if status isn't provided */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
