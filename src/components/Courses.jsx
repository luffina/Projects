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
      title: "SEAL & Accelerated Programs (Year 6)",
      description:
        "Advanced learning for gifted Year 6 students aiming for private school scholarships (ACER, Edutest, AAS).",
      link: "/courses/seal-program"
    },
    {
      title: "Selective Prep Program (Selective School Entry)",
      description:
        "Targeted preparation for selective school entrance exams with curriculum aligned to ACER and Edutest.",
      link: "/courses/selective-prep"
    },
    {
      title: "VCESE (Victorian Curriculum)",
      description:
        "Comprehensive support for students following the Victorian Curriculum to achieve academic excellence.",
    },
    {
      title: "Primary (Year 1–6)",
      description:
        "Help your child understand the world through science. Build reasoning and strong foundational knowledge.",
    },
    {
      title: "Secondary (Year 7–10)",
      description:
        "Strengthen science skills with a structured term-wise program. Build confidence and subject mastery.",
    }
    
  ];

  return (
    <section className="courses-section">
      <h2 className="courses-heading">Our Courses</h2>
      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="courses-card"
            onClick={() => {
              if (course.link) {
                navigate(course.link);
              }
            }}
            style={{ cursor: course.link ? 'pointer' : 'default' }}
          >
            <h3 className="courses-card-title">{course.title}</h3>
            <p className="courses-card-text">{course.description}</p>
            {course.title === "Montessori Education (Age 2–6)" ? (
              <a
                href="https://rdreamzmontessori.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="enroll-button explore-button">Explore</button>
              </a>
            ) : showEnrollLinks ? (
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
