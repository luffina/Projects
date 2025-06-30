// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const PORT = 5000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.json());

let users = []; // Use DB in production

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

// 💳 Stripe Payment Route
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount in cents, e.g. 1500 = $15.00

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'aud',
      payment_method_types: ['card'],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
