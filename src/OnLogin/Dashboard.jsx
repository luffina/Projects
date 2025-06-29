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

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    

    <div>
      {/* Header Images */}
        <div className="dashboard-banner">
          <img src="/assets/header1.png" alt="Montessori" />
          <img src="/assets/header2.png" alt="Science Lab" />
          <img src="/assets/header3.png" alt="Learning" />
          <img src="/assets/header4.png" alt="English Class" />
        </div>

        {/* Navigation */}
      <div className="dashboard-menu">
        <div onClick={() => window.open('https://rdreamzmontessori.com/', '_blank', 'noopener,noreferrer')}>
          Montessori
        </div>
        <div onClick={() => window.open('/courses/seal-program', '_blank', 'noopener,noreferrer')}>
          SEAL
        </div>
        <div onClick={() => window.open('/courses/selective-prep', '_blank', 'noopener,noreferrer')}>
          Selective Entry
        </div>
        <div onClick={() => window.open('/courses/vce', '_blank', 'noopener,noreferrer')}>
          VCESE
        </div>
        <div className="dashboard-actions">
          <button onClick={() => navigate('/profile')}>Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
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

      
    </div>
  );
}
