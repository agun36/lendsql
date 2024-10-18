import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import './App.scss';
import { User } from './types/asideType';
import Navigator from './components/navBar/navbar';
import AsideComponent from './components/aside/aside';
import AuthForm from './components/authForm/authForm';
import UserDashboard from './pages/dashboard/userDashboard';
import Users from './pages/users/users';
import UserDetails from './pages/userDetails/userDetails';
import Placeholder from './pages/placeholder/Placeholder';

const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
const dataToken = import.meta.env.PROD ? null : import.meta.env.VITE_REACT_VITE_TOKEN;

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAsideVisible, setIsAsideVisible] = useState(false); // State to manage aside visibility

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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <AppContent users={users} filteredUsers={filteredUsers} setUsers={setUsers} setFilteredUsers={setFilteredUsers} isAsideVisible={isAsideVisible} setIsAsideVisible={setIsAsideVisible} />
    </Router>
  );
};

const AppContent: React.FC<{
  users: User[];
  filteredUsers: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
  isAsideVisible: boolean;
  setIsAsideVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ users, filteredUsers, setUsers, setFilteredUsers, isAsideVisible, setIsAsideVisible }) => {
  const location = useLocation();
  const hideNavAndAside = location.pathname === '/';

  return (
    <div className="app-container">
      {!hideNavAndAside && <Navigator users={users} setFilteredUsers={setFilteredUsers} setIsAsideVisible={setIsAsideVisible} />}
      <div className="main-content">
        {!hideNavAndAside && <AsideComponent isAsideVisible={isAsideVisible} />}
        <div className="content container">
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/dashboard" element={<UserDashboard users={users} filteredUsers={filteredUsers} setUsers={setUsers} setFilteredUsers={setFilteredUsers} />} />
            <Route path="/customers/users" element={<Users users={users} filteredUsers={filteredUsers} setUsers={setUsers} setFilteredUsers={setFilteredUsers} />} />
            <Route path="/user/:userId" element={<UserDetails users={users} setFilteredUsers={setFilteredUsers} setUsers={setUsers} filteredUsers={filteredUsers} />} />
            <Route path='/customers/guarantors' element={<Placeholder pageName={'Guarantors'} />} />
            <Route path='/customers/loans' element={<Placeholder pageName={'Loans'} />} />
            <Route path='/customers/decision-models' element={<Placeholder pageName={'Decision Models'} />} />
            <Route path='/customers/savings' element={<Placeholder pageName={'Savings'} />} />
            <Route path='/customers/loan-requests' element={<Placeholder pageName={'Loan Requests'} />} />
            <Route path='/customers/whitelist' element={<Placeholder pageName={'Whitelist'} />} />
            <Route path='/customers/karma' element={<Placeholder pageName={'Karma'} />} />
            <Route path='/business/organisation' element={<Placeholder pageName={'Organization'} />} />
            <Route path='/business/loan-products' element={<Placeholder pageName={'Loan Products'} />} />
            <Route path='/business/fees-and-charges' element={<Placeholder pageName={'Fees & Charges'} />} />
            <Route path='/business/transactions' element={<Placeholder pageName={'Transactions'} />} />
            <Route path='/business/services' element={<Placeholder pageName={'Services'} />} />
            <Route path='/business/service-account' element={<Placeholder pageName={'Service Account'} />} />
            <Route path='/business/settlements' element={<Placeholder pageName={'Settlements'} />} />
            <Route path='/business/reports' element={<Placeholder pageName={'Reports'} />} />
            <Route path='/settings/preferences' element={<Placeholder pageName={'Preferences'} />} />
            <Route path='/settings/fees-and-pricing' element={<Placeholder pageName={'Fees & Pricing'} />} />
            <Route path='/settings/audit-logs' element={<Placeholder pageName={'Audit Logs'} />} />
            <Route path='/settings/tires' element={<Placeholder pageName={'Tires'} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;