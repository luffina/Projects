import React from 'react';
import { Link } from 'react-router-dom';

export default function NaplanPrep() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        .naplan-container {
          max-width: 900px;
          margin: 4rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          color: #001f42;
          font-family: 'Segoe UI', sans-serif;
        }
        .naplan-container h1 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .naplan-container h2 {
          font-size: 1.4rem;
          margin-top: 2rem;
          color: #ff6a28;
        }
        .naplan-container p,
        .naplan-container ul {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .naplan-container ul {
          padding-left: 1.5rem;
        }
        .naplan-container li {
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="naplan-container">
        <h1>NAPLAN Preparation Program</h1>
        <p>
          Our NAPLAN Prep course is designed to build students' confidence and skills across all areas tested in the 
          <strong> National Assessment Program – Literacy and Numeracy (NAPLAN)</strong>.
        </p>

        <h2>📘 What We Cover</h2>
        <ul>
          <li>Reading Comprehension</li>
          <li>Writing Tasks (Narrative & Persuasive)</li>
          <li>Language Conventions: Grammar, Punctuation & Spelling</li>
          <li>Numeracy: Problem-solving, Number Skills & Patterns</li>
        </ul>

        <h2>🧑‍🏫 Features</h2>
        <ul>
          <li>Practice with past and mock NAPLAN papers</li>
          <li>Personalised feedback</li>
          <li>Small group and 1:1 sessions available</li>
        </ul>

        <p>
          Reach out for a schedule and fees: <strong>info@mathscilab@outlook.com</strong> or <strong>+61 484 791 052</strong>
        </p>
      </div>
      <Link to="/enroll" className="enroll-link">
                <button className="enroll-button">Enroll Now</button>
              </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fefefe',
    minHeight: '100vh',
    padding: '2rem 0'
  }
};
