import React from 'react';
import './TopBar.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-left">
        {/* Logo as Link to Home */}
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="MathSciLab Logo"
            className="top-logo"
          />
        </Link>

        {/* Contact Info */}
        <div className="contact-info">
          <FaPhoneAlt className="icon" />
          <span>+61 484791052</span>
          <FaEnvelope className="icon" style={{ marginLeft: '20px' }} />
          <span>info@mathscilab.com.au</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="top-right">
        <Link to="/courses">Courses</Link>
        <Link to="/fees">Fee Payment</Link>
        <Link to="/login">Parent Portal</Link>
        <Link to="/virtual-learning">Virtual Learning</Link>
        <Link to="/library">E-Library</Link>
      </div>
    </div>
  );
}
