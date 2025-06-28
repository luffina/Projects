import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src="/assets/aboutus.png" alt="Ms Rekha" className="about-image" />
          </div>

          <div className="about-founder">
            <h3>About Ms Rekha</h3>
            <p><strong>B.SC, MBA(India), DMME (London), PDECCA(Singapore), DEC (Australia)</strong></p>
            <p>
              Ms Rekha is the founder and mentor of this Enrichment Centre. She received her Montessori Diploma from MMI (Modern Montessori Institute) London in 2013, with trainers who worked directly with Dr. Maria Montessori for over 20 years. Her Early Childhood Education was completed at KLC Singapore in 2016.
            </p>
            <p>
              Since 2004, she has prepared and tutored students on Montessori education across Singapore, Malaysia, Philippines, Thailand, and India.
            </p>
          </div>
        </div>
         <Link to="/enroll" className="enroll-link">
                <button className="enroll-button">Enroll Now</button>
              </Link>
      </div>
    </section>
  );
}
