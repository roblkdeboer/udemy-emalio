import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accesstoken);
    }
  )
);

// Check which port to use
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('App listening on Port 5000');
});
