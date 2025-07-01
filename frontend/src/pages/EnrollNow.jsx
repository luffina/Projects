import React from 'react';
import './EnrollNow.css';

export default function EnrollNow() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
      parentName: formData.get('parentName'),
      email: formData.get('email'),
      studentName: formData.get('studentName'),
      yearLevel: formData.get('yearLevel'),
      centre: formData.get('centre'),
      courseType: formData.get('courseType'),
      phone: formData.get('phone')
    };
    
    // Create email body
    const emailBody = `
New Enrollment Request:

Parent Name: ${data.parentName}
Email: ${data.email}
Student Name: ${data.studentName}
Year Level: ${data.yearLevel}
Centre: ${data.centre}
Course Type: ${data.courseType}
Phone Number: ${data.phone}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:info@mathscilab.com.au?subject=New Enrollment Request - ${data.studentName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  
  return (
    <div className="enroll-container">
      <h1 className="enroll-heading">🎓 Enroll Now</h1>
      <p className="enroll-sub">Register instantly to begin your child's learning journey!</p>
      
      <form className="enroll-form" onSubmit={handleSubmit}>
        <input type="text" name="studentName" placeholder="👦 Student Name *" required />
         <input type="text" name="yearLevel" placeholder="🎓 Year Level *" required />
        <input type="text" name="parentName" placeholder="👨 Parent Name *" required/>
        
       
        <input type="email" name="email" placeholder="📧 Email *" required />
        
        <select name="centre" required>
          <option value="">Select Centre *</option>
          <option value="Balwyn">Balwyn</option>
          <option value="Mount Waverley">Mount Waverley</option>
          
        </select>
        
        <select name="courseType" required>
          <option value="">Select Course Type *</option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="VCE Coaching">VCE Coaching</option>
          <option value="Selective">Selective</option>
          <option value="SEAL">SEAL</option>
          <option value="Scholarship">Scholarship</option>
          <option value="General">General</option>
          <option value="Olympiad">Olympiad</option>
          <option value="ICAS">ICAS</option>
          <option value="ICAS">Beyond School Enrichment</option>
        </select>
        
        <input type="tel" name="phone" placeholder="📞 Phone Number *" required />
        <button type="submit">📨 Send</button>
      </form>

      <div className="contact-box">
        <h2>📍 Visit Us or Message Us</h2>
        <p>Online or in-person tuition available in groups or privately.</p>
        
        <div className="locations">
          <div className="location">
            <h3>Balwyn Centre</h3>
            <p>📍 399 Belmore Road, Balwyn VIC, Australia</p>
          </div>
          <div className="location">
            <h3>Mount Waverley Centre</h3>
            <p>📍 52 Wadham Parade, Mount Waverley VIC, Australia</p>
          </div>
        </div>
        
        <p>📱 +61 484791052</p>
        <p>⏰ Open today: 09:00 am – 08:00 pm</p>
        <a href="https://wa.me/61484791052" target="_blank" rel="noreferrer">💬 Message us on WhatsApp</a>
      </div>
    </div>
  );
}