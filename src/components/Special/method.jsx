import React, { useEffect, useState } from 'react';
import './Method.css';

export default function Method() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // delay to trigger animation
  }, []);

  return (
    <div className={`method-container ${animate ? 'fade-in' : ''}`}>
      <h2 className="method-title">Singapore Curriculum Approach</h2>
      <p className="method-purpose">
        The Singapore Curriculum is a structured yet flexible education model that emphasizes
        <strong> conceptual mastery</strong>, <strong>critical thinking</strong>, and
        <strong> real-world problem-solving</strong>. It’s globally recognized for fostering
        deep understanding and high academic performance, particularly in mathematics and science.
      </p>

      <h3 className="method-subtitle">Core Strengths</h3>
      <ul className="method-list">
        {[
          '🧠 Conceptual mastery through visual and applied learning techniques',
          '🔍 Deep analytical and reasoning skill development across subjects',
          '🌱 Balanced academic and personal growth with character education modules',
          '📚 Spiral curriculum model that revisits concepts at increasing complexity',
          '🌐 Global competence with an emphasis on future-ready skills',
          '👩‍🏫 Strong emphasis on teacher training and high-quality instructional materials'
        ].map((item, index) => (
          <li key={index} className={`slide-in slide-delay-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
