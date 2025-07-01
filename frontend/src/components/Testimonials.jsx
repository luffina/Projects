import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Aditi Sabnis",
    text: "We’ve been on quite the journey trying different options over the years – Kumon, JAC, Qs – but nothing has compared to our experience here. Their sessions are incredibly focused and thoughtfully tailored. It feels like private coaching in a group setting.",
  },
  {
    name: "Prabhjeet Gill",
    text: "It has been such a good experience attending tutoring by Aryan. Aryan is such a reliable individual who takes the time to help every student individually. Aryan is an amazing tutor and should receive a promotion.",
  },
  {
    name: "Rohan Rajasekar",
    text: "The tutoring centre offers a professional and organised environment for learning. The tutors provide clear explanations and are always ready to help. I appreciated the flexibility to ask questions even outside of scheduled class times.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2>What Parents Say</h2>
      <div className="testimonial-card">
        <p className="quote">“{testimonials[index].text}”</p>
        <p className="author">— {testimonials[index].name}</p>
      </div>
      <Link to="/enroll" className="enroll-link">
                <button className="enroll-button">Enroll Now</button>
              </Link>
    </section>
  );
}
