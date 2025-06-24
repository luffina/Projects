import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import demoData from './demo.json';
import Calendar from './Calender';

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    const fallbackId = 'demo_12233';
    const uid = storedId || fallbackId;
    setUserId(uid);
    const user = demoData.find(u => u.userId === uid);
    if (user) setCourses(user.courses);
  }, []);

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

      {/* Course Overview Navigation */}
      <div className="dashboard-menu">
        <div onClick={() => handleNavClick('/dashboard')}>Montessori</div>
        <div onClick={() => handleNavClick('/dashboard')}>SEAL</div>
        <div onClick={() => handleNavClick('/dashboard')}>Selective Entry</div>
        <div onClick={() => handleNavClick('/dashboard')}>VCESE</div>
      </div>

      {/* About Section */}
      <section className="dashboard-about">
        <h2>About RDreamz Montessori & MathSciLab</h2>
        <p>
          We empower young learners through structured curriculum and supportive
          learning environments. Our programs blend Montessori philosophy with strong
          foundations in STEM, ensuring academic and personal growth.
        </p>
      </section>

      {/* Course Categories */}
      <section className="dashboard-categories">
        <h3>Course Categories</h3>
        <div className="category-grid">
          <div className="category-card">Scholarship Preparation</div>
          <div className="category-card">Selective School Program</div>
          <div className="category-card">Olympiad Studies</div>
          <div className="category-card">Special Writing</div>
          <div className="category-card">Public Speaking</div>
          <div className="category-card">Robotics</div>
          <div className="category-card">VCE / University Entry</div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="dashboard-featured">
        <h3>Featured Courses</h3>
        <div className="featured-grid">
          {[1, 2, 3, 4, 5, 6, 7].map(level => (
            <div className="featured-card" key={level}>
              <div>Year {level} English Term 1</div>
              <button>Explore</button>
            </div>
          ))}
        </div>
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
