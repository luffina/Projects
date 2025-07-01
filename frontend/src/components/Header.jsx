import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="address">
          MathSciLab Education<br />
          58/6/399 Belmore Road, Balwyn 3103
        </div>
      </div>
      <div className="header-right">
        <nav className="nav-links">
          <Link to="/courses">Courses</Link>
          <a href="#">Search</a>
          <a href="#">Wishlist</a>
          <a href="#">Login</a>
        </nav>
        <div className="phone">+61-484791052</div>
      </div>
    </header>
  );
}
