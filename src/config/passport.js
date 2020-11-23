import passport from 'passport';
import passportJWT from 'passport-jwt';
import User from '../models/users.model';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


async function verifyCallback(payload, done){
  try {
    const user = await User.findOne({ _id: payload.id });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}

export default () => {
  const config = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };
  passport.use(User.createStrategy());
  passport.use(new JWTStrategy(config, verifyCallback));
}