import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { catchAsync } from '../middlewares/errors';
import passport from 'passport';

export default () => {
  const api = Router();

  // POST new user
  api.post('/register', AuthController.register);

  // POST log in user
  api.post('/login', passport.authenticate('local', { session: false }), AuthController.login);

  return api;
}