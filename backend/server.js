// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = []; // In-memory user store (use a DB like MongoDB in production)

// Signup route
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.json({ success: false, message: 'Email already registered.' });
  }

  users.push({ email, password });
  return res.json({ success: true });
});

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.json({ success: false, message: 'Invalid email or password.' });
  }

  return res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
