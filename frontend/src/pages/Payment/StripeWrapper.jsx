import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import BookingPage from '../Booking';

const stripePromise = loadStripe('pk_live_51Otnc3S6jivUUFNCjV9JH1ZzVB3xtTKoGOviUhuGHoCGrQl3C8EYyctta6OgM1GGIHLBDi5weeKg9KYdbc3TjyQ800ST0dEpOP');

export default function StripeWrapper() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const selectedAmount = 50; // e.g., $10.00 (in cents)
    fetch('http://localhost:5000/api/create-payment-intent', {
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
