'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _passport = require('passport');var _passport2 = _interopRequireDefault(_passport);
var _passportJwt = require('passport-jwt');var _passportJwt2 = _interopRequireDefault(_passportJwt);
var _users = require('../models/users.model');var _users2 = _interopRequireDefault(_users);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var JWTStrategy = _passportJwt2.default.Strategy;
var ExtractJWT = _passportJwt2.default.ExtractJwt;

function verifyCallback(payload, done) {
  return _users2.default.findOne({ _id: payload.id }).
  then(function (user) {
    return done(null, user);
  }).catch(function (err) {
    return done(err);
  });
}exports.default =

function () {
  var config = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET };

  _passport2.default.use(_users2.default.createStrategy());
  _passport2.default.use(new JWTStrategy(config, verifyCallback));
};
//# sourceMappingURL=passport.js.map