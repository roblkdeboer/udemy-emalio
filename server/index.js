import 'dotenv/config';
import express from 'express';
import './services/passport.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(authRoutes);

// Check which port to use
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('App listening on Port 5000');
});
