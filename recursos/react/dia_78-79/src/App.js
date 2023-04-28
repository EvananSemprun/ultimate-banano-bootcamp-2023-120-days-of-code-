import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Registration</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={() => { localStorage.removeItem('user'); window.location.href='/login'; }}>Log Out</button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
