import React from 'react';

export default function Curriculum() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Curriculum Overview</h1>
      <p style={styles.intro}>
        The SEAL and Accelerated Programs cover a broad range of subjects, ensuring a well-rounded education:
      </p>

      <div style={styles.list}>
        <div style={styles.item}>
          <h3 style={styles.title}>📘 Advanced Mathematics</h3>
          <p style={styles.text}>
            Concepts and problem-solving up to Year 7 and beyond.
          </p>
        </div>
        <div style={styles.item}>
          <h3 style={styles.title}>📖 English Language and Literature</h3>
          <p style={styles.text}>
            In-depth reading, writing, and comprehension skills to prepare students for higher-level literature and analytical tasks.
          </p>
        </div>
        <div style={styles.item}>
          <h3 style={styles.title}>🔬 Science and Technology</h3>
          <p style={styles.text}>
            Exploration of scientific concepts with hands-on experiments and technology integration.
          </p>
        </div>
        <div style={styles.item}>
          <h3 style={styles.title}>🧠 Verbal and Non-Verbal Reasoning</h3>
          <p style={styles.text}>
            Intensive practice in reasoning skills that are critical for selective and scholarship testing.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '900px',
    margin: 'auto',
    color: '#001f42',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#001f42',
  },
  intro: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  item: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '1rem 1.5rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '1.2rem',
    color: '#ff6a28',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#333',
  },
};
