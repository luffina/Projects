import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#001f42',
      color: '#ffffff',
      padding: '3rem 2rem',
      fontFamily: 'Segoe UI, sans-serif',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    column: {
      textAlign: 'left',
    },
    heading: {
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    link: {
      color: '#f5f5f5',
      fontSize: '0.95rem',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.5rem',
    },
    linkHover: {
      color: '#ff6a28',
      textDecoration: 'underline',
    },
    bottom: {
      textAlign: 'center',
      marginTop: '3rem',
      fontSize: '0.85rem',
      color: '#ccc',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div style={styles.column}>
          <p>📍 58/6/399 Belmore Road, Balwyn 3103</p>
          <p>✉️ info@mathscilab.com</p>
          <p>📞 +61-484791052</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <a href="/about" style={styles.link}>About</a>
          <a href="/courses" style={styles.link}>Courses</a>
          <a href="/enroll" style={styles.link}>Enroll</a>
        </div>
        

        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <a href="#" style={styles.link}>Facebook</a>
          <a href="#" style={styles.link}>Instagram</a>
          <a href="#" style={styles.link}>LinkedIn</a>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} MathSciLab Education. All rights reserved.
      </div>
    </footer>
  );
}
