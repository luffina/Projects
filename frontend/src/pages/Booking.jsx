import React, { useState, useEffect } from 'react';
import './Booking.css';
import courseData from './courseSchedule.json';
import { PaymentElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [formFilled, setFormFilled] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (selectedSessions.length > 0) {
      const totalAmount = selectedSessions.reduce((sum, s) => sum + parseFloat(s.fee.replace('$', '')), 0);

      fetch('http://localhost:5000/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(totalAmount * 100) }) // Stripe accepts cents
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(err => console.error('Error creating payment intent:', err));
    }
  }, [selectedSessions]);

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

  const handleStripeSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/success',
      },
    });

    if (result.error) {
      alert(result.error.message);
    }
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
              <select required><option value="">Title</option><option>Mr</option><option>Ms</option><option>Mrs</option></select>
              <input required placeholder="First Name" />
              <input required placeholder="Last Name" />
              <select required><option value="">Gender</option><option>Male</option><option>Female</option></select>
              <input required placeholder="Address" />
              <input required placeholder="Postcode" />
              <input required placeholder="Suburb" />
              <select required><option value="">State</option><option>VIC</option><option>NSW</option><option>QLD</option></select>
              <input required placeholder="Email" />
              <input required placeholder="Mobile" />
            </div>
          </form>
          <button className="next-btn" onClick={nextStep}>NEXT</button>
        </div>
      )}
{step === 3 && (
  <div className="step-content">
    <h2>Confirm Booking & Payment</h2>
    <label>
      <input type="checkbox" required /> I agree to the Terms and Conditions
    </label>

    {elements && (
      <form onSubmit={e => {
        localStorage.setItem("currentUser", JSON.stringify({
          email: "student@example.com",
          year: selectedSessions[0]?.year,
          subject: selectedSessions[0]?.subject
        }));
        handleStripeSubmit(e);
      }}>
        <PaymentElement />
        <div className="btn-group">
          <button type="button" onClick={prevStep}>BACK</button>
          <button type="submit">PAY NOW</button>
        </div>
      </form>
    )}
  </div>
)}


    </div>
  );
}
