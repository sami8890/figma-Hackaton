import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia',
    typescript: true,
});

export const formatAmount = (amount: number) => (amount / 100).toFixed(2);