import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './models/User.js';
import './services/passport.js';
import authRoutes from './routes/authRoutes.js';

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(
  cookieSession({
    // 30 days in miliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

// Check which port to use
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('App listening on Port 5000');
});
