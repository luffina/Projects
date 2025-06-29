import React from 'react';

export default function VCE() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>VCE Coaching (Year 11 & 12)</h1>
      <p style={styles.text}>
        Our VCE program is designed to boost ATAR performance. We focus on SAC prep, past paper analysis, and subject mastery across English, Math Methods, Specialist, and Science.
      </p>
      <ul style={styles.list}>
        <li>🎯 ATAR Strategy & Planning</li>
        <li>📊 Practice Exams & Timed Assessments</li>
        <li>🔬 Physics, Chemistry, Biology Support</li>
        <li>📖 Advanced English & Essay Writing</li>
        <li>🧠 Mental Health & Study Coaching</li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    padding: '4rem',
    fontFamily: 'Georgia, serif',
    animation: 'fadeSlideIn 0.7s ease-in-out',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#004080',
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
