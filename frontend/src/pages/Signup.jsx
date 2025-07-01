import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if account already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const alreadyExists = existingUsers.find(user => user.email === email);

    if (alreadyExists) {
      alert('Account already exists! Please log in.');
      navigate('/login');
      return;
    }

    // Save new user
    const updatedUsers = [...existingUsers, { email, password, paidYear: null }];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Optional: auto-login
    localStorage.setItem('currentUser', JSON.stringify({ email, paidYear: null }));

    alert('Signup successful!');
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignup} className="login-form">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
