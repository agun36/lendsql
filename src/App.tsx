import './App.scss'
import './components/authForm/authform.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/authForm/authForm';
import UserDashboard from './components/dashboard/userDashboard'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        {/* <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
