import Amadeus from 'amadeus';
import Unsplash from 'unsplash-js';

export const amadeus = new Amadeus({
  clientId: process.env.REACT_APP_AMADEUS_CLIENT_ID,
  clientSecret: process.env.REACT_APP_AMADEUS_CLIENT_SECRET,
});

export const unsplash = new Unsplash({ 
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});