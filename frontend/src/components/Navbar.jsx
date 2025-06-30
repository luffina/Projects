import { useEffect, useState } from 'react';
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
        <h1 className="brand-logo">MATHSCILAB</h1>
<ul className="nav-links">
  {/* About Us Dropdown */}
  <li className="has-dropdown">
    <Link to="#">ABOUT US</Link>
    <ul className="dropdown">
      <li><Link to="/about">Leadership Team</Link></li>
      {/* <li><Link to="/method">The TLL Method</Link></li> */}
      <li><Link to="/method">Our Curriculum</Link></li>
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
      {Array.from({ length: 12 }, (_, i) => {
        const yearLabel = `year-${i + 1}`;
        return (
          <li key={i + 1}>
            <Link to={`/curriculum/${yearLabel}`}>Year {i + 1}</Link>
          </li>
        );
      })}
    </ul>
  </li>

  <li><Link to="/courses/vce">VCE Coaching</Link></li>
  <li><Link to="/courses/selective-prep">Selective School Entry</Link></li>
  <li><Link to="/courses/seal-program">SEAL Training</Link></li>

  {/* Special Programmes Dropdown */}
  <li className="has-dropdown">
    <Link to="#">SPECIAL PROGRAMMES</Link>
    <ul className="dropdown">
      <li><Link to="/amc-olympiad">Maths Olympiad</Link></li>
      <li><Link to="/special/icas">ICAS Prep program</Link></li>
      <li><Link to="/special/naplan">NAPLAN Preparation</Link></li>
    </ul>
  </li>

  {/* Centres Dropdown */}
  <li className="has-dropdown">
    <Link to="#">OUR CENTRES</Link>
    <ul className="dropdown">
      <li><Link to="/centres">Balwyn</Link></li>
      <li><Link to="/centres">Mount Waverley</Link></li>
    </ul>
  </li>

  <li>
    <a
      href="https://wa.me/61484791052"
      target="_blank"
      rel="noopener noreferrer"
    >
      WHATSAPP US
    </a>
  </li>
  <li><Link to="/enroll" className="contact-btn">CONTACTUS</Link></li>
</ul>
      </div>
    </nav>
  );
}
