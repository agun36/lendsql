import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import AuthForm from './components/authForm/authForm';
import UserDashboard from './pages/dashboard/userDashboard';
import Users from './pages/users/users';
import UserDetails from './pages/userDetails/userDetails';
import { User } from './types/asideType';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(import.meta.env.VITE_REACT_APP_API_URL!, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_REACT_VITE_TOKEN}`,
          },
        });
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<UserDashboard users={users} filteredUsers={filteredUsers} setUsers={setUsers} setFilteredUsers={setFilteredUsers} />} />
        <Route path="/customers/users" element={<Users users={users} filteredUsers={filteredUsers} setUsers={setUsers} setFilteredUsers={setFilteredUsers} />} />
        <Route path="/user/:userId" element={<UserDetails users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;