import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Calendar from './Calender';

export default function Dashboard() {
  const [paidYear, setPaidYear] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user) {
      alert('Please log in to access the dashboard.');
      navigate('/login');
      return;
    }

    setPaidYear(user.paidYear); // e.g. 3 if user paid for Year 3
  }, [navigate]);

  const handleExplore = () => {
    if (paidYear) {
      navigate(`/curriculum/year-${paidYear}`);
    } else {
      alert('No curriculum access found. Please complete payment.');
    }
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-new">
      {/* Header Images */}
      <div className="dashboard-banner">
        <img src="/assets/header1.jpg" alt="Montessori" />
        <img src="/assets/header2.jpg" alt="Science Lab" />
        <img src="/assets/header3.jpg" alt="Learning" />
        <img src="/assets/header4.jpg" alt="English Class" />
      </div>

      {/* Navigation */}
      <div className="dashboard-menu">
        <div onClick={() => handleNavClick('/dashboard')}>Montessori</div>
        <div onClick={() => handleNavClick('/seal-program')}>SEAL</div>
        <div onClick={() => handleNavClick('/selective')}>Selective Entry</div>
        <div onClick={() => handleNavClick('/vces')}>VCESE</div>
      </div>

      {/* About */}
      <section className="dashboard-about">
        <h2>About RDreamz Montessori & MathSciLab</h2>
        <p>
          We empower young learners through structured curriculum and supportive
          learning environments. Our programs blend Montessori philosophy with strong
          foundations in STEM, ensuring academic and personal growth.
        </p>
      </section>

      {/* Featured Course */}
      <section className="dashboard-featured">
        <h3>Your Curriculum</h3>
        {paidYear ? (
          <div className="featured-grid">
            <div className="featured-card">
              <div>Year {paidYear} Curriculum Access</div>
              <button onClick={handleExplore}>Explore</button>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            🚫 You haven’t purchased a curriculum yet.
          </p>
        )}
      </section>

      {/* Calendar */}
      <section className="dashboard-calendar">
        <h3>School Calendar</h3>
        <Calendar />
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2025 RDreamz Montessori & MathSciLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
