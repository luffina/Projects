// BookingPage.jsx
import React, { useState } from 'react';
import './Booking.css';
import courseData from './courseSchedule.json';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [formFilled, setFormFilled] = useState(false);

  const nextStep = () => {
    if (step === 2 && !formFilled) {
      alert('Please fill in all required fields.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const levels = [...new Set(courseData.map(item => item.year))];
  const allCourses = courseData.filter(course => course.year === selectedLevel);
  const filteredCourses = allCourses.filter(course => course.subject === selectedCourse);

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
    setSelectedCourse('');
    setSelectedSessions([]);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSessions([]);
  };

  const handleSelectSession = (session) => {
    setSelectedSessions([session]);
  };

  const handleSubmit = () => {
    window.location.href = 'https://buy.stripe.com/test_bIYdRn8aW6ue9WU6oo';
  };

  return (
    <div className="booking-container styled">
      <div className="step-indicator">
        {[1, 2, 3].map(n => (
          <div key={n} className={`step ${step === n ? 'active' : ''}`}>{n}</div>
        ))}
      </div>

      {step === 1 && (
        <div className="step-content">
          <h2>Course Booking</h2>
          <div className="form-row">
            <div>
              <label>Year Level:</label>
              <select value={selectedLevel} onChange={handleLevelChange} required>
                <option>Select...</option>
                {levels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Course:</label>
              <select value={selectedCourse} onChange={handleCourseChange} required>
                <option>Select...</option>
                {[...new Set(allCourses.map(course => course.subject))].map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          <h4>Available Sessions</h4>
          <table className="styled-table">
            <thead>
              <tr><th>Select</th><th>Subject</th><th>From</th><th>To</th><th>Time</th><th>Sessions</th><th>Fee</th></tr>
            </thead>
            <tbody>
              {filteredCourses.length > 0 ? filteredCourses.map((course, index) => (
                <tr key={index}>
                  <td><button onClick={() => handleSelectSession(course)}>ADD</button></td>
                  <td>{course.subject}</td>
                  <td>{course.from}</td>
                  <td>{course.to}</td>
                  <td>{course.time}</td>
                  <td>{course.sessions}</td>
                  <td>{course.fee}</td>
                </tr>
              )) : (
                <tr><td colSpan="7">No sessions found</td></tr>
              )}
            </tbody>
          </table>

          <h4>Selected Sessions</h4>
          <table className="styled-table">
            <thead><tr><th>Subject</th><th>From</th><th>To</th><th>Time</th><th>Sessions</th><th>Fee</th></tr></thead>
            <tbody>
              {selectedSessions.map((s, i) => (
                <tr key={i}>
                  <td>{s.subject}</td>
                  <td>{s.from}</td>
                  <td>{s.to}</td>
                  <td>{s.time}</td>
                  <td>{s.sessions}</td>
                  <td>{s.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="next-btn" onClick={nextStep}>NEXT</button>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <h2>Personal & Student Details</h2>
          <form onChange={() => setFormFilled(true)}>
            <div className="form-grid">
              <select required><option value="">Title</option><option>Mr</option><option>Ms</option><option>Mrs</option><option>Dr</option></select>
              <input required placeholder="First Name" />
              <input required placeholder="Last Name" />
              <select required><option value="">Gender</option><option>Male</option><option>Female</option><option>Other</option></select>
              <input required placeholder="Address" />
              <input required placeholder="Postcode" />
              <input required placeholder="Suburb" />
              <select required><option value="">State</option><option>VIC</option><option>NSW</option><option>QLD</option><option>SA</option><option>TAS</option><option>WA</option><option>NT</option><option>ACT</option></select>
              <select required><option value="">Country</option><option>Australia</option></select>
              <input placeholder="Home Phone" />
              <input placeholder="Work Phone" />
              <input required placeholder="Mobile" />
              <input required placeholder="Email" />
              <input placeholder="Fax" />
              <label><input type="checkbox" /> Subscribe to Email List</label>

              <input required placeholder="Student First Name" />
              <input required placeholder="Student Last Name" />
              <select required><option value="">Year Level</option><option>Year 3</option><option>Year 4</option><option>Year 5</option><option>Year 6</option><option>Year 7</option><option>Year 8</option><option>Year 9</option><option>Year 10</option><option>Year 11</option><option>Year 12</option></select>
              <input required placeholder="As of Year" value="2025" readOnly />
              <input required placeholder="DOB (dd/mm/yyyy)" />
              <select required><option value="">Gender</option><option>Male</option><option>Female</option><option>Other</option></select>
              <input placeholder="First Language" />
              <input placeholder="Address If Different" />
              <input placeholder="Current School Attending" />
              <input placeholder="Main School Applying To" />
              <input placeholder="Additional School Applying To" />
              <input placeholder="Food Requirement" />
              <input placeholder="Medical Section" />
              <input placeholder="Allergy" />
              <input placeholder="Asthma" />
              <input placeholder="Other Life-Threatening Condition" />
            </div>
          </form>

          <button className="next-btn" onClick={nextStep}>NEXT</button>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <h2>Confirm Booking</h2>
          <label><input type="checkbox" required /> I agree to the Terms and Conditions</label>
          <div className="btn-group">
            <button onClick={prevStep}>BACK</button>
            <button onClick={handleSubmit}>PAY NOW</button>
          </div>
        </div>
      )}
    </div>
  );
}
