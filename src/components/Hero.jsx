import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ For routing
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate(); // ✅ Hook to handle route changes

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          {/* Logo Pair - Slanted */}
          <div className="hero-logos-wrapper">
            <img
              src="/e649e6b9-a4d2-480c-ba8a-acb65d6e7f17.png"
              alt="Left Decorative Logo"
              className="hero-logo left"
            />
            <img
              src="/e649e6b9-a4d2-480c-ba8a-acb65d6e7f17.png"
              alt="Right Decorative Logo"
              className="hero-logo right"
            />
          </div>

          {/* Hero Text */}
          <p className="tagline">MathSciLab Education, RDreamz Montessori</p>
          <h1 className="title">
            Learning Today,<br />
            Leading Tomorrow.
          </h1>
          <p className="subtitle">Let our passionate teachers help you reach your goals!</p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/enroll')}>
              GET STARTED
            </button>
            <button className="btn-outline" onClick={() => navigate('/about')}>
              ABOUT US
            </button>
          </div>
        </div>

        {/* Hero Illustrations */}
        <div className="hero-images">
          <img src="/assets/grad-kid.png" alt="Graduation Kid Illustration" className="tilted pink" />
          <img src="/assets/happy-girl.png" alt="Smiling Girl Illustration" className="tilted yellow" />
          <img src="/assets/kids-illustration.png" alt="Group of Kids Illustration" className="tilted green" />
        </div>
      </div>
    </section>
  );
}
