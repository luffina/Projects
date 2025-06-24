import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isSticky, setIsSticky] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <nav className={`main-navbar ${isSticky ? 'sticky show' : ''}`}>
      <div className="nav-content">
        <h1 className="brand-logo">THE LEARNING LAB</h1>
        <ul className="nav-links">
          {/* About Us Dropdown */}
          <li className="has-dropdown">
            <Link to="#">ABOUT US</Link>
            <ul className="dropdown">
              <li><Link to="/about">Leadership Team</Link></li>
              <li><Link to="/method">The TLL Method</Link></li>
              <li><Link to="/curriculum">Our Curriculum</Link></li>
              <li><Link to="/teachers">Our Teachers</Link></li>
              <li><Link to="/track-record">Track Record</Link></li>
              <li><Link to="/testimonials">Student Experience</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </li>

          {/* Programmes Dropdown */}
          <li className="has-dropdown">
            <Link to="#">OUR PROGRAMMES</Link>
            <ul className="dropdown">
              {Array.from({ length: 12 }, (_, i) => (
                <li key={i + 1}>
                  <Link to={`/programmes/year${i + 1}`}>Year {i + 1}</Link>
                </li>
              ))}
              <li><Link to="/special/vce">VCE Coaching</Link></li>
              <li><Link to="/special/selective">Selective School Entry</Link></li>
              <li><Link to="/special/seal">SEAL Training</Link></li>
            </ul>
          </li>

          {/* Special Programmes Dropdown */}
          <li className="has-dropdown">
            <Link to="#">SPECIAL PROGRAMMES</Link>
            <ul className="dropdown">
              <li><Link to="/amc-olympiad">Maths Olympiad</Link>
</li>
              <li><Link to="/special/icas">ICAS Prep program</Link></li>
              <li><Link to="/special/naplan">NAPLAN Preparation</Link></li>
            </ul>
          </li>

          {/* Centres Dropdown */}
          <li className="has-dropdown">
            <Link to="#">OUR CENTRES</Link>
            <ul className="dropdown">
              <li><Link to="/centres/balwyn">Balwyn</Link></li>
              <li><Link to="/centres/mount-waverley">Mount Waverley</Link></li>
            </ul>
          </li>

          <li><Link to="/whatsapp">WHATSAPP US</Link></li>
          <li><Link to="/contact" className="contact-btn">CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
}
