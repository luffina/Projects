const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize services
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// In-memory user storage (use database in production)
let users = [];

// OpenAI Chat Route
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a friendly AI tutor that answers questions about Math, Science, and academic topics only.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    res.json({ reply: chat.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ reply: 'Something went wrong.' });
  }
});

// User Authentication Routes
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  const userExists = users.find(user => user.email === email);
  
  if (userExists) {
    return res.json({ success: false, message: 'Email already registered.' });
  }
  
  users.push({ email, password });
  return res.json({ success: true });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return res.json({ success: false, message: 'Invalid email or password.' });
  }
  
  return res.json({ success: true });
});

// Stripe Payment Route
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

// Start server
app.listen(PORT, () => {
  console.log(`🧠 Server running on http://localhost:${PORT}`);
});