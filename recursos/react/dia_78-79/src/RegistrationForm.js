import React, { useState } from 'react';
import './RegistrationForm.css';

import './RegistrationForm.css';
const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h1>Register</h1>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
