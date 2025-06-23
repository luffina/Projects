import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [tab, setTab] = useState('profile');

  return (
    <div className="profile-dashboard">
      <div className="profile-sidebar">
        <div className="profile-avatar">
          <div className="avatar-circle">DD</div>
          <div className="username">Hello, Demo Demo</div>
        </div>
        <div className="profile-nav">
          <button onClick={() => setTab('dashboard')} className={tab === 'dashboard' ? 'active' : ''}>Dashboard</button>
          <button onClick={() => setTab('profile')} className={tab === 'profile' ? 'active' : ''}>My Profile</button>
          <button onClick={() => setTab('courses')} className={tab === 'courses' ? 'active' : ''}>Enrolled Courses</button>
          <button onClick={() => setTab('wishlist')} className={tab === 'wishlist' ? 'active' : ''}>Wishlist</button>
          <button onClick={() => setTab('reviews')} className={tab === 'reviews' ? 'active' : ''}>Reviews</button>
          <button onClick={() => setTab('quiz')} className={tab === 'quiz' ? 'active' : ''}>My Quiz Attempts</button>
          <button onClick={() => setTab('order')} className={tab === 'order' ? 'active' : ''}>Order History</button>
          <button onClick={() => setTab('qa')} className={tab === 'qa' ? 'active' : ''}>Question & Answer</button>
          <button onClick={() => setTab('settings')} className={tab === 'settings' ? 'active' : ''}>Settings</button>
          <button>Logout</button>
        </div>
      </div>

      <div className="profile-content">
        {tab === 'dashboard' && <div className="center">Welcome to your dashboard!</div>}

        {tab === 'profile' && (
          <div className="profile-section">
            <h2>My Profile</h2>
            <p><strong>Registration Date:</strong> February 8, 2024 3:12 am</p>
            <p><strong>First Name:</strong> demo</p>
            <p><strong>Last Name:</strong> demo</p>
            <p><strong>Username:</strong> demo</p>
            <p><strong>Email:</strong> vaibhav.kavimandan@gmail.com</p>
            <p><strong>Phone Number:</strong> -</p>
            <p><strong>Skill/Occupation:</strong> -</p>
            <p><strong>Biography:</strong> -</p>
          </div>
        )}

        {tab === 'courses' && (
          <div className="profile-section">
            <h2>Enrolled Courses</h2>
            <p>No Data Available in this Section</p>
          </div>
        )}

        {tab === 'wishlist' && <div className="profile-section"><h2>Wishlist</h2><p>No Data</p></div>}
        {tab === 'reviews' && <div className="profile-section"><h2>Reviews</h2><p>No Data</p></div>}
        {tab === 'quiz' && <div className="profile-section"><h2>My Quiz Attempts</h2><p>No Data</p></div>}
        {tab === 'order' && <div className="profile-section"><h2>Order History</h2><p>No Data</p></div>}
        {tab === 'qa' && (
          <div className="profile-section">
            <h2>Question & Answer</h2>
            <label>Sort By:</label>
            <select>
              <option>All(0)</option>
            </select>
            <p>No Data Available in this Section</p>
          </div>
        )}

        {tab === 'settings' && (
          <div className="profile-section">
            <h2>Settings</h2>
            <label>First Name</label>
            <input type="text" defaultValue="demo" />
            <label>Last Name</label>
            <input type="text" defaultValue="demo" />
            <label>Username</label>
            <input type="text" defaultValue="demo" disabled />
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" />
            <label>Skill/Occupation</label>
            <input type="text" defaultValue="UX Designer" />
          </div>
        )}
      </div>
    </div>
  );
}
