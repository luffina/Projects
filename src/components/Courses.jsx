import React from 'react';
import './Courses.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Courses({ showEnrollLinks }) {
  const navigate = useNavigate();
  const courseList = [
    {
      title: "Montessori Education (Age 2–6)",
      description:
        "Nurture a love for science early with our Montessori curriculum. Designed to boost intellect and creativity in young learners.",
    },
    {
      title: "SEAL Training",
      description:
        "Tailored for advanced learners preparing for Selective Entry Accelerated Learning. Deep dives into advanced science topics.",
    },
    {
      title: "Selective School Entry",
      description:
        "Guidance and preparation for high-achieving students aiming for selective school entry. Push your academic limits with expert help.",
    },
    {
      title: "VCESE (Victorian Curriculum)",
      description:
        "Guidance and preparation for high-achieving students aiming for selective school entry. Push your academic limits with expert help.",
    },
    {
      title: "Primary (Year 1–6)",
      description:
        "Help your child understand the world through science during their most curious years. Build abstract reasoning and strong foundations.",
    },
    {
      title: "Secondary (Year 7–10)",
      description:
        "A term-wise program to strengthen science knowledge and build confidence through fun, supportive, and structured learning.",
    }
  ];

  return (
    <section className="courses-section">
      <h2 className="courses-heading">Our Courses</h2>
      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div key={index} className="courses-card">
            <h3 className="courses-card-title">{course.title}</h3>
            <p className="courses-card-text">{course.description}</p>
            {showEnrollLinks ? (
              <Link to="/enroll" className="enroll-link">
                <button className="enroll-button">Enroll Now</button>
              </Link>
            ) : (
              <button className="enroll-button">Enroll Now</button>
            )}
          </div>
        ))}
      </div>
      <div className="book-now-wrapper">
        <button className="book-now-button" onClick={() => navigate('/book')}>
          Book Now
        </button>
      </div>
    </section>
  );
}
