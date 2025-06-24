import React from 'react';

export default function IcasPrep() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        .icas-container {
          max-width: 900px;
          margin: 4rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          color: #001f42;
          font-family: 'Segoe UI', sans-serif;
        }
        .icas-container h1 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .icas-container h2 {
          font-size: 1.4rem;
          margin-top: 2rem;
          color: #ff6a28;
        }
        .icas-container p,
        .icas-container ul {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .icas-container ul {
          padding-left: 1.5rem;
        }
        .icas-container li {
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="icas-container">
        <h1>ICAS Preparation Program</h1>
        <p>
          MathSciLab offers a specialised ICAS Preparation Program to help students perform confidently in the 
          <strong> International Competitions and Assessments for Schools (ICAS)</strong>.
        </p>

        <h2>💡 Why Choose Our Prep?</h2>
        <ul>
          <li>Expert guidance on question types and formats</li>
          <li>Regular practice tests & performance feedback</li>
          <li>Focus on problem-solving and critical thinking</li>
        </ul>

        <h2>📚 Subjects Covered</h2>
        <ul>
          <li>ICAS Mathematics</li>
          <li>ICAS English</li>
          <li>ICAS Science</li>
        </ul>

        <h2>📍 Enrollment Details</h2>
        <ul>
          <li>Duration: 6–8 weeks before ICAS test</li>
          <li>Mode: In-person & Online</li>
          <li>Eligibility: Students from Year 2 to Year 12</li>
        </ul>

        <p>
          Contact us to enrol: <strong>info@mathscilab.com.au</strong> or <strong>+61 484 791 052</strong>
        </p>
      </div>
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
