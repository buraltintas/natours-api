/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// const stripe = Stripe(
//   'pk_test_51KZHnNKXOoa63H0UHLUGMymSFf0tQNgIR4LtxTlSbuc6KVLFAL2meqtqEOBvoXuSquHhBTkHrTGUuITVOgdMZ8Q400dMxDlqfX'
// );

export const bookTour = async (tourId) => {
  try {
    // 1) get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/booking/checkout-session/${tourId}`
    );

    console.log(session);
    // 2) create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
  }
};
