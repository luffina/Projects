// server.js
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'aud',
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(4242, () => console.log('🚀 Server running on http://localhost:4242'));
