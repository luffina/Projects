import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon orange">ABC</div>
          <h3>Interactive Learning<br />Games & Activities</h3>
          <p>Fun and educational games covering math, science, language arts, and geography.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon yellow">🍎</div>
          <h3>Child-Friendly<br />Content Libraries</h3>
          <p>Carefully curated content across core subjects designed for young learners.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon green">✏️</div>
          <h3>Progress Tracking &<br />Reporting</h3>
          <p>Track child progress, set goals and generate reports for parents and teachers.</p>
        </div>
      </div>
    </section>
  );
}
