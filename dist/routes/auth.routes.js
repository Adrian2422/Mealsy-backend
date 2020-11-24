'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');
var _auth = require('../controllers/auth.controller');var _auth2 = _interopRequireDefault(_auth);
var _users = require('../middlewares/validators/users.validator');var _users2 = _interopRequireDefault(_users);
var _errors = require('../middlewares/errors');
var _passport = require('passport');var _passport2 = _interopRequireDefault(_passport);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function () {
  var api = (0, _express.Router)();

  // POST new user
  api.post('/register', _users2.default, _auth2.default.register);

  // POST log in user
  api.post('/login', _passport2.default.authenticate('local', { session: false }), _auth2.default.login);

  return api;
};
//# sourceMappingURL=auth.routes.js.map