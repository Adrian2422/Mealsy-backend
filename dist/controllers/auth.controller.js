'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _users = require('../models/users.model');var _users2 = _interopRequireDefault(_users);
var _jsonwebtoken = require('jsonwebtoken');var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default =

{
  register: function register(req, res, next) {var _this = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {var engravedData, username, email, age, permissions, password, user;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              engravedData = req.engravedData;
              username = engravedData.username, email = engravedData.email, age = engravedData.age, permissions = engravedData.permissions, password = engravedData.password;if (!(
              Object.keys(engravedData).length > 0 && engravedData.constructor === Object)) {_context.next = 9;break;}
              user = new _users2.default({ username: username, email: email, age: age, permissions: permissions });_context.next = 6;return (
                _users2.default.register(user, password));case 6:return _context.abrupt('return',
              res.status(201).send('User created successfully. Now you can log in.'));case 9:return _context.abrupt('return',

              res.status(422).send({ data: req.body, message: 'Some data is invalid!' }));case 10:case 'end':return _context.stop();}}}, _callee, _this);}))();

  },

  login: function login(req, res, next) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {var token;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              // generate token
              token = _jsonwebtoken2.default.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
              // return token
              return _context2.abrupt('return', res.send({ token: token }));case 2:case 'end':return _context2.stop();}}}, _callee2, _this2);}))();
  } };
//# sourceMappingURL=auth.controller.js.map