import React from 'react';
import { Link } from 'react-router-dom';

export default function AmcOlympiad() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        .amc-container {
          max-width: 900px;
          margin: 4rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          color: #001f42;
          font-family: 'Segoe UI', sans-serif;
        }

        .amc-container h1 {
          font-size: 2rem;
          color: #001f42;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .amc-container h2 {
          font-size: 1.4rem;
          margin-top: 2rem;
          color: #ff6a28;
        }

        .amc-container p,
        .amc-container ul,
        .amc-container ol {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .amc-container ul,
        .amc-container ol {
          padding-left: 1.5rem;
        }

        .amc-container li {
          margin-bottom: 0.5rem;
        }

        .amc-container a {
          color: #007acc;
          text-decoration: none;
        }

        .amc-container a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="amc-container">
        <h1>Australian Mathematics Competition (AMC) at MathSciLab</h1>

        <p>
          MathSciLab is proud to be an <strong>authorised centre</strong> for the Australian Mathematics Competition (AMC), one of the world’s largest and most prestigious school-based mathematics competitions.
          Organised by the <a href="https://www.amt.edu.au/amc" target="_blank" rel="noreferrer">Australian Maths Trust (AMT)</a>, the AMC aims to inspire and challenge students in mathematical problem-solving.
        </p>

        <h2>📅 Key Dates for 2025</h2>
        <ul>
          <li><strong>Competition Dates:</strong> Tuesday 5 to Thursday 7 August 2025</li>
          <li><strong>Registration Deadline:</strong> Friday 1 August 2025</li>
          <li><strong>Results Announcement:</strong> After Friday 14 November 2025</li>
        </ul>

        <h2>🧑‍🎓 Who Can Participate?</h2>
        <ul>
          <li><strong>Middle Primary:</strong> Years 3–4</li>
          <li><strong>Upper Primary:</strong> Years 5–6</li>
          <li><strong>Junior:</strong> Years 7–8</li>
          <li><strong>Intermediate:</strong> Years 9–10</li>
          <li><strong>Senior:</strong> Years 11–12</li>
        </ul>

        <h2>📝 Competition Format</h2>
        <ul>
          <li>Duration: 60 mins (Primary), 75 mins (Secondary)</li>
          <li>30 questions (25 MCQ + 5 integer answers)</li>
          <li>Available both online and on paper</li>
        </ul>

        <h2>🏅 Awards and Recognition</h2>
        <ul>
          <li>Participation, Proficiency, Credit, Distinction, High Distinction</li>
          <li>Prize, Best in School, Cheryl Praeger Medal</li>
          <li>AMC Medals, Peter O’Halloran Award (perfect scores)</li>
        </ul>

        <h2>📍 Why Participate Through MathSciLab?</h2>
        <ul>
          <li>Official supervision & integrity</li>
          <li>Supportive preparation environment</li>
          <li>Accessible exam centre</li>
        </ul>

        <h2>📝 How to Register</h2>
        <ol>
          <li>Email: <a href="mailto:info@mathscilab.com.au">info@mathscilab.com.au</a> or call <strong>+61 484 791 052</strong></li>
          <li>Provide student name, year level, and division</li>
          <li>We’ll guide you with registration and materials</li>
        </ol>

        <p>
          For more details, visit the <a href="https://www.amt.edu.au/amc" target="_blank" rel="noreferrer">AMT official site</a>.
        </p>
      </div>
      <Link to="/enroll" className="enroll-link">
                <button className="enroll-button">Enroll Now</button>
              </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fefefe',
    minHeight: '100vh',
    padding: '2rem 0'
  }
};
