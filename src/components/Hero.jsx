import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/video(2).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content on top of video */}
      <div className="hero-overlay">
        <div className="hero-content">
          
          {/* Slanted Logos */}
          <div className="hero-logos-wrapper">
            <img
              src="/assets/logo.png"
              alt="MathSciLab"
              className="hero-logo left"
            />
            <img
              src="/assets/logo1.png"
              alt="RDreamz"
              className="hero-logo right"
            />
          </div>

          {/* Text */}
          <div className="hero-text">
            <p className="tagline">MathSciLab Education, RDreamz Montessori</p>
            <h1 className="title">
              Learning Today,<br />Leading Tomorrow.
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

          {/* OPTIONAL: Illustration Images */}
          <div className="hero-images">
            <img src="/assets/grad-kid.png" alt="Graduation Kid" className="tilted pink" />
            <img src="/assets/happy-girl.png" alt="Smiling Girl" className="tilted yellow" />
            <img src="/assets/kids-illustration.png" alt="Group of Kids" className="tilted green" />
          </div>

        </div>
      </div>
    </section>
  );
}
