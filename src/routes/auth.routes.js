import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import validateUser from '../middlewares/validators/users.validator';
import { catchAsync } from '../middlewares/errors';
import passport from 'passport';

export default () => {
  const api = Router();

  // POST new user
  api.post('/register', validateUser, AuthController.register);

  // POST log in user
  api.post('/login', passport.authenticate('local', { session: false }), AuthController.login);

  return api;
}