import React from 'react';

export default function Review() {
  const styles = {
    container: {
      padding: '4rem 1rem',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9fbfd',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#001f42',
      textAlign: 'center',
      marginBottom: '3rem',
      fontWeight: 'bold',
    },
    testimonialBox: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      margin: '1.5rem auto',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
      maxWidth: '900px',
      textAlign: 'center',
    },
    quote: {
      fontSize: '1.2rem',
      fontStyle: 'italic',
      color: '#444',
      marginBottom: '1rem',
    },
    author: {
      fontWeight: 600,
      color: '#777',
    },
  };

  const testimonials = [
    {
      quote:
        'The SEAL Program has been transformative for my daughter. She is challenged academically and has developed a genuine love for learning.',
      author: '— Laura M., Parent',
    },
    {
      quote:
        'Thanks to the preparation I received, I felt confident and well-prepared for my scholarship exam. I was thrilled to receive an offer from my first-choice school!',
      author: '— Daniel T., Student',
    },
    {
      quote:
        'The curriculum is engaging and has pushed me to think critically and analyze information deeply. I love being part of this program.',
      author: '— Emma G., Student',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>What Parents Say About Us</h2>
      {testimonials.map((t, i) => (
        <div key={i} style={styles.testimonialBox}>
          <p style={styles.quote}>“{t.quote}”</p>
          <p style={styles.author}>{t.author}</p>
        </div>
      ))}
    </div>
  );
}
