import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
const found = users.find(u => u.email === email && u.password === password);
if (found) {
  localStorage.setItem('currentUser', JSON.stringify(found));
  navigate('/dashboard');
} else {
  alert('Invalid credentials');
}
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
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
        <button type="submit">Login</button>

        <p>
          Don’t have an account?{' '}
          <span onClick={() => navigate('/signup')} style={{ color: '#00c3c3', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
