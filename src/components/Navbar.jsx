import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate('/')}>
        <img src="assets/logo.png" alt="MathSciLab Logo" className="navbar-logo" />
        <div className="navbar-brand">
          <div className="brand-tagline">Empowering Young Minds</div>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/maths">MATHS</Link></li>
        <li className="dropdown">
          <button className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
            MORE <span className="arrow">▾</span>
          </button>
          <ul className="dropdown-content">
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/workshops">Workshops</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </li>
      </ul>

      <div className="navbar-icons">
        <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
      </div>

      <div className="navbar-login">
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
}
