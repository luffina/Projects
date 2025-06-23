import React from 'react';
import './EnrollNow.css';

export default function EnrollNow() {
  return (
    <div className="enroll-container">
      <h1 className="enroll-heading">🎓 Enroll Now</h1>
      <p className="enroll-sub">Register instantly to begin your child's learning journey!</p>
      
      <form className="enroll-form">
        <input type="text" placeholder="👨 Parent Name *" required />
        <input type="email" placeholder="📧 Email *" required />
        <input type="text" placeholder="👦 Student Name *" required />
        <input type="text" placeholder="🎓 Year Level *" required />
        <select required>
          <option value="">Select Course Type *</option>
          <option>Selective</option>
          <option>SEAL</option>
          <option>Scholarship</option>
          <option>General</option>
          <option>Olympiad</option>
          <option>ICAS</option>
        </select>
        <input type="tel" placeholder="📞 Phone Number *" required />
        <button type="submit">📨 Send</button>
      </form>

      <div className="contact-box">
        <h2>📍 Visit Us or Message Us</h2>
        <p>Online or in-person tuition available in groups or privately.</p>
        <p>📍 399 Belmore Road, Balwyn VIC, Australia</p>
        <p>📱 +61 484791052</p>
        <p>⏰ Open today: 09:00 am – 08:00 pm</p>
        <a href="https://wa.me/61484791052" target="_blank" rel="noreferrer">💬 Message us on WhatsApp</a>
      </div>
    </div>
  );
}
