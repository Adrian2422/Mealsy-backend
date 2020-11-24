'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _users = require('../../models/users.model');var _users2 = _interopRequireDefault(_users);
var _validator = require('validator');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default = function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(

  function _callee(req, res, next) {var data, validData, _req$body, username, email, age, permissions, password, user, passRegex;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            data = {};
            validData = [];_req$body =
            req.body, username = _req$body.username, email = _req$body.email, age = _req$body.age, permissions = _req$body.permissions, password = _req$body.password;_context.next = 5;return (
              _users2.default.findOne({ $or: [{ username: username }, { email: email }] }));case 5:user = _context.sent;
            if (!user) {
              // validate name
              data.username = username;
              validData.push(username.length >= 8);
              // validate email
              data.email = email;
              validData.push((0, _validator.isEmail)(email));
              // validate age
              data.age = age;
              validData.push(age > 13 || typeof age === 'number');
              // validate permissions
              data.permissions = permissions;
              validData.push([1, 2, 3, 4].includes(permissions));
              // validate password
              data.password = password;
              passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=?&])[A-Za-z\d$@$!%* #+=?&]{8,}$/;
              validData.push(passRegex.test(password));
              // check if any validation was failed
              req.engravedData = validData.includes(false) ? {} : _extends({}, data);
              next();
            } else {
              res.status(409).send('User with this username/email already exist! Please insert unused data!');
            }case 7:case 'end':return _context.stop();}}}, _callee, this);}));function validateUser(_x, _x2, _x3) {return _ref.apply(this, arguments);}return validateUser;}();
//# sourceMappingURL=users.validator.js.map