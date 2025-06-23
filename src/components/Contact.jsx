import React from 'react';

export default function Contact() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Get in Touch</h2>
        <p style={styles.subtext}>We’d love to hear from you. Fill out the form below or reach out directly.</p>
        <form style={styles.form}>
          <div style={styles.row}>
            <input type="text" placeholder="Your Name" style={styles.input} required />
            <input type="email" placeholder="Your Email" style={styles.input} required />
          </div>
          <textarea placeholder="Your Message" rows="5" style={styles.textarea} required />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div style={styles.info}>
          <p><strong>Email:</strong> info@mathscilab.com</p>
          <p><strong>Phone:</strong> +61-484791052</p>
          <p><strong>Address:</strong> 58/6/399 Belmore Road, Balwyn 3103</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '5rem 2rem',
    backgroundColor: '#fff9f3',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtext: {
    color: '#555',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    width: '100%',
  },
  textarea: {
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    resize: 'vertical',
    width: '100%',
  },
  button: {
    backgroundColor: '#ff6a28',
    color: '#fff',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '999px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  info: {
    marginTop: '2.5rem',
    fontSize: '0.95rem',
    color: '#333',
    textAlign: 'left',
  }
};
