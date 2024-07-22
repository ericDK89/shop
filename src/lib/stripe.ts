import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('Stripe Secret Key not found.');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
  appInfo: {
    name: 'Shop',
  },
});

