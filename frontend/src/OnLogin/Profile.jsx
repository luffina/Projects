import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    paidYear: ''
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      alert('Please log in to access your profile.');
      navigate('/login');
    } else {
      setUser(currentUser);
      setFormData({
        username: currentUser.username || '',
        password: currentUser.password || '',
        email: currentUser.email || '',
        paidYear: currentUser.paidYear || ''
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = allUsers.map(u =>
      u.email === user.email ? { ...u, ...formData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Profile updated successfully!');
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Profile</h2>
      <div style={styles.form}>
        <label style={styles.label}>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Email</label>
        <input
          name="email"
          value={formData.email}
          disabled
          style={{ ...styles.input, backgroundColor: '#eee' }}
        />

        <label style={styles.label}>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

<<<<<<< HEAD:src/OnLogin/Profile.jsx
        <label style={styles.label}>Paid Year Level</label>
=======
        <label style={styles.label}>Enrolled Year </label>
>>>>>>> 794487c86945daa5df2efb0bb6e2da32058c2fab:frontend/src/OnLogin/Profile.jsx
        <input
          name="paidYear"
          type="number"
          min="1"
          max="12"
          value={formData.paidYear}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleSave} style={styles.buttonGreen}>
          Save Changes
        </button>
        <button onClick={handleLogout} style={styles.buttonGrey}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '500px',
    margin: '2rem auto',
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#001F42',
    marginBottom: '1rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginTop: '1rem',
    fontWeight: 'bold'
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '0.2rem'
  },
  buttonGreen: {
    marginTop: '1.5rem',
    padding: '0.6rem',
    backgroundColor: '#81b441',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  buttonGrey: {
    marginTop: '0.8rem',
    padding: '0.6rem',
    backgroundColor: '#999',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
