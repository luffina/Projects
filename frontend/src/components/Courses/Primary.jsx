import React from 'react';

export default function Primary() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Primary Programs (Year 1 - 6)</h1>
      <p style={styles.text}>
        Our Primary School Program nurtures foundational skills in English, Maths, and Science with fun, interactive lessons.
        Students are guided through hands-on activities and engaging challenges to build strong academic confidence.
      </p>
      <ul style={styles.list}>
        <li>✏️ Literacy & Numeracy Enhancement</li>
        <li>🧮 Problem Solving & Reasoning</li>
        <li>📚 Early Exam Techniques</li>
        <li>🔍 Science Explorations</li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    padding: '4rem',
    fontFamily: 'Arial, sans-serif',
    animation: 'fadeSlideIn 0.7s ease-in-out',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#003366',
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
