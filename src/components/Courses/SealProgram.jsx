import React from 'react';

export default function SealProgram() {
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
      <h1 style={styles.h1}>SEAL & Accelerated Programs (Year 6 Students)</h1>

      <p style={styles.p}>
        Our <strong>SEAL (Select Entry Accelerated Learning)</strong> and <strong>Accelerated Programs</strong> are designed for academically gifted students seeking to enhance their learning experience and excel in their studies.
      </p>

      <h2 style={styles.h2}>Key Features</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Accelerated, advanced curriculum beyond Year 6 level</li>
        <li style={styles.li}>Emphasis on critical thinking, reasoning, and study skills</li>
        <li style={styles.li}>Preparation for scholarship exams (ACER, Edutest, AAS)</li>
        <li style={styles.li}>Real-world project integration for engagement</li>
      </ul>

      <h2 style={styles.h2}>Subjects Covered</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Advanced Mathematics</li>
        <li style={styles.li}>English & Literature</li>
        <li style={styles.li}>Science & Technology</li>
        <li style={styles.li}>Verbal & Non-Verbal Reasoning</li>
      </ul>

      <h2 style={styles.h2}>Curriculum Overview</h2>
      <p style={styles.p}>
        The curriculum includes advanced problem-solving, critical thinking, and practice modules tailored to selective exams.
      </p>

      <h2 style={styles.h2}>Enrollment Process</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>1. Consultation</li>
        <li style={styles.li}>2. Assessment</li>
        <li style={styles.li}>3. Registration</li>
        <li style={styles.li}>4. Kick-off session</li>
      </ul>
    </div>
  );
}
