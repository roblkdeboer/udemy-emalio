import passport from 'passport';
import express from 'express';

const router = express.Router();

const authLogin = router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

const authCallback = router.get(
  '/auth/google/callback',
  passport.authenticate('google')
);

export default router;
