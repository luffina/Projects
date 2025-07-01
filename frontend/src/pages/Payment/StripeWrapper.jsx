<<<<<<< HEAD:src/pages/Payment/StripeWrapper.jsx
// StripeWrapper.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Booking from '../Booking';

const stripePromise = loadStripe('pk_test_51Oms7l...');

const StripeWrapper = () => {
  const options = {
    mode: 'payment',
    amount: 1099, // replace with selectedSessions[0]?.fee if dynamic
    currency: 'aud',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Booking />
    </Elements>
  );
};

export default StripeWrapper;
=======
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import BookingPage from '../Booking';

const stripePromise = loadStripe('pk_live_51Otnc3S6jivUUFNCjV9JH1ZzVB3xtTKoGOviUhuGHoCGrQl3C8EYyctta6OgM1GGIHLBDi5weeKg9KYdbc3TjyQ800ST0dEpOP');

export default function StripeWrapper() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const selectedAmount = 50; // e.g., $10.00 (in cents)
    fetch(' https://mathscilab.netlify.app/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: selectedAmount }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error('Failed to create payment intent:', err));
  }, []);

  const appearance = { theme: 'stripe' };

  const options = {
    clientSecret,
    appearance,
    paymentMethodCreation: 'manual' // 👈 This disables Link
  };

  if (!clientSecret) return <div>Loading payment...</div>;

  return (
    <Elements stripe={stripePromise} options={options}>
      <BookingPage />
    </Elements>
  );
}
>>>>>>> 794487c86945daa5df2efb0bb6e2da32058c2fab:frontend/src/pages/Payment/StripeWrapper.jsx
