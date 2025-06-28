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
