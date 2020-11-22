import passport from 'passport';
import User from '../models/users.model';

export default () => {
  passport.use(User.createStrategy());
}