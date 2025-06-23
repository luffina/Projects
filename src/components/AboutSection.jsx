import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Who Are We?</h2>
        <p className="about-intro">
          At <strong>MathSciLab Education</strong> and <strong>RDreamz Montessori</strong>, we're a team of passionate educators 
          dedicated to unlocking every child’s potential through play-based learning and personalized teaching strategies.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>👩‍🏫 Our Background</h3>
            <p>With over <strong>30 years of experience</strong> in early childhood and primary education, our founder has guided hundreds of students from Kinder to Year 12.</p>
          </div>

          <div className="about-card">
            <h3>📘 Our Expertise</h3>
            <p>We specialize in <strong>Mathematics and Science</strong>, nurturing curious minds and building solid academic foundations. Over 400 students have flourished under our guidance.</p>
          </div>

          <div className="about-card">
            <h3>🌱 Personalized Learning</h3>
            <p>Every child is unique. Our tailored teaching methods allow them to grow confidently and reach their full potential in a supportive environment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
