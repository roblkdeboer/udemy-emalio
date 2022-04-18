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

const currentUser = router.get('/api/check-current-user', (req, res) => {
  res.send(req.user);
});

export default router;
