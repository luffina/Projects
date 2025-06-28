import React from 'react';
import { Link } from 'react-router-dom';

export default function VirtualLearning() {
  return (
    <div className="virtual-learning-container">
      <h2>Virtual Learning Environment</h2>
      <p>
        Our virtual learning platform offers a flexible and interactive way to engage with course materials.
      </p>
      <Link to="/enroll" className="enroll-link">
        <button className="enroll-button">Enroll Now</button>
      </Link>
    </div>
  );
}
