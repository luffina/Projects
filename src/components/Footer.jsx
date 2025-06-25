import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#001f42',
      color: '#ffffff',
      padding: '3rem 2rem 2rem',
      fontFamily: 'Segoe UI, sans-serif',
      fontSize: '0.95rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid #444',
      paddingBottom: '2rem',
    },
    column: {
      textAlign: 'left',
    },
    heading: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffa873',
    },
    link: {
      color: '#f2f2f2',
      textDecoration: 'none',
      marginBottom: '0.5rem',
      display: 'block',
    },
    bottom: {
      textAlign: 'center',
      fontSize: '0.8rem',
      color: '#ccc',
      marginTop: '2rem',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div style={styles.column}>
          <h4 style={styles.heading}>ABOUT US</h4>
          <Link to="/courses" style={styles.link}>Leadership Team</Link>
          <Link to="/method" style={styles.link}>The TLL Method</Link>
          <Link to="/curriculum" style={styles.link}>Our Curriculum</Link>
          <Link to="/teachers" style={styles.link}>Our Teachers</Link>
          <Link to="/track-record" style={styles.link}>Track Record</Link>
          <Link to="/testimonials" style={styles.link}>Student Experience</Link>
          <Link to="/careers" style={styles.link}>Careers</Link>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>OUR PROGRAMMES</h4>
          <Link to="/programmes" style={styles.link}>All Programmes</Link>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>SPECIAL PROGRAMMES</h4>
          <Link to="/amc-olympiad" style={styles.link}>Maths Olympiad</Link>
          <Link to="/special/icas" style={styles.link}>ICAS Prep Program</Link>
          <Link to="/special/naplan" style={styles.link}>NAPLAN Preparation</Link>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>OUR CENTRES</h4>
          <Link to="/centres" style={styles.link}>Balwyn</Link>
          <Link to="/centres" style={styles.link}>Mount Waverley</Link>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>CONNECT</h4>
          <Link to="/whatsapp" style={styles.link}>WhatsApp Us</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
          <Link to="/login" style={styles.link}>Parent Portal</Link>
          <Link to="/virtual-learning" style={styles.link}>Virtual Learning</Link>
          <Link to="/library" style={styles.link}>E-Library</Link>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} MathSciLab Education. All rights reserved.
      </div>
    </footer>
  );
}
