import CheckoutForm from '@/components/stripecheckoutform';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MgX9rEWFVsNKUJKAKYisI4OwOHY47W0nNEP34orHdeAvCj42jrUNdSxZcsMMI8tgG1pmfoojBs6rL4rgfkDhHUa00iZjuaNQS');

export default function StripeCheckoutPage() {
  

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};