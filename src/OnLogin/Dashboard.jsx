import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import demoData from './demo.json';
import Calendar from '../OnLogin/Calender';

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
    <div className="dashboard">
      <header className="dashboard-header">
        <img src="/assets/logo.png" alt="Logo" className="dashboard-logo" />
        <div className="dashboard-nav">
          <span onClick={() => handleNavClick('/dashboard')}>Dashboard</span>
          <span onClick={() => handleNavClick('/calendar')}>Calendar</span>
          <span onClick={() => handleNavClick('/search-courses')}>Search Courses</span>
          <span onClick={() => handleNavClick('/my-courses')}>My Courses</span>
        </div>
        <div className="dashboard-user">{userId}</div>
      </header>

      <div className="dashboard-main">
        <aside className="dashboard-sidebar">
          <button>Hide sidebars</button>
        </aside>

        <main className="dashboard-content">
          <div className="section">
            <h3>Recently accessed courses</h3>
            {courses.length > 0 ? (
              <div className="card">
                <img src={courses[0].image} alt="Course" />
                <div>{courses[0].name}</div>
              </div>
            ) : (
              <p>No courses accessed yet.</p>
            )}
          </div>

          <div className="section">
            <h3>Course overview</h3>
            <div className="filters">
              <button>All (except removed from view)</button>
              <div>
                <select>
                  <option>Course Name</option>
                  <option>Start Date</option>
                </select>
                <button>Card</button>
              </div>
            </div>
            {courses.map((course, idx) => (
              <div className="card" key={idx}>
                <img src={course.image} alt="Course" />
                <div>{course.name}</div>
              </div>
            ))}
          </div>

          <div className="section side-widgets">
            <div>
              <h4>Creator enrol verify</h4>
              <p>My apply(0)</p>
              <p>Apply history</p>
            </div>
            <div>
              <h4>Upcoming events</h4>
              <p>There are no upcoming events</p>
            </div>
            <div>
              <h4>Calendar</h4>
              <p>June 2025</p>
              <div className="calendar-grid">
                <Calendar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
