import React from 'react';

export default function Secondary() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Secondary Programs (Year 7 - 10)</h1>
      <p style={styles.text}>
        We provide subject-focused tutoring for secondary students to deepen their understanding of key concepts and excel in school assessments.
      </p>
      <ul style={styles.list}>
        <li>📘 In-depth English and Literature Coaching</li>
        <li>📐 Algebra, Geometry, and Advanced Maths Skills</li>
        <li>🧪 Hands-on Science Experiments & Theory</li>
        <li>📝 Mid-Year & End-of-Year Exam Preparation</li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    padding: '4rem',
    fontFamily: 'Verdana, sans-serif',
    animation: 'fadeSlideIn 0.7s ease-in-out',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1a1a1a',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  list: {
    fontSize: '1.1rem',
    lineHeight: '2',
  },
};
