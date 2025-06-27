import React from 'react';

export default function SelectivePrep() {
  const styles = {
    page: {
      padding: '4rem 2rem',
      maxWidth: '1000px',
      margin: 'auto',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#1f2937',
      backgroundColor: '#fff',
    },
    h1: {
      fontSize: '2.2rem',
      marginBottom: '1rem',
      color: '#001f42',
      textAlign: 'center',
    },
    h2: {
      fontSize: '1.4rem',
      marginTop: '2rem',
      marginBottom: '1rem',
      color: '#ff6a28',
    },
    p: {
      lineHeight: 1.7,
      marginBottom: '1rem',
      fontSize: '1rem',
    },
    ul: {
      paddingLeft: '1.5rem',
      marginBottom: '1rem',
    },
    li: {
      marginBottom: '0.5rem',
      fontSize: '1rem',
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Selective Prep Program</h1>

      <p style={styles.p}>
        Our Selective Prep Program is designed to equip students with the skills, knowledge, and confidence required to succeed in selective entrance exams like ACER and Edutest.
      </p>

      <h2 style={styles.h2}>Key Features</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Curriculum aligned with ACER and Edutest formats</li>
        <li style={styles.li}>Small class sizes for personalized attention</li>
        <li style={styles.li}>Custom learning plans and performance feedback</li>
        <li style={styles.li}>Exam techniques, time management, and stress reduction training</li>
        <li style={styles.li}>Weekend and after-school class options</li>
        <li style={styles.li}>Active parental involvement and regular updates</li>
      </ul>

      <h2 style={styles.h2}>Subjects Covered</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Mathematics</li>
        <li style={styles.li}>English Language</li>
        <li style={styles.li}>Verbal & Non-Verbal Reasoning</li>
        <li style={styles.li}>Full practice exams with analytics</li>
      </ul>

      <h2 style={styles.h2}>Enrollment Steps</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>1. Consultation</li>
        <li style={styles.li}>2. Assessment</li>
        <li style={styles.li}>3. Registration</li>
        <li style={styles.li}>4. Kick-off session</li>
      </ul>
    </div>
  );
}
