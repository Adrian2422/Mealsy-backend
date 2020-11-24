"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _users = require("../models/users.model");var _users2 = _interopRequireDefault(_users);
var _bcrypt = require("bcrypt");var _bcrypt2 = _interopRequireDefault(_bcrypt);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default =

{
  createUser: function createUser(req, res) {var _this = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {var newData, salt, hash, user;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              newData = req.body;_context.next = 3;return (
                _bcrypt2.default.genSalt(10));case 3:salt = _context.sent;_context.next = 6;return (
                _bcrypt2.default.hash(newData.password, salt));case 6:hash = _context.sent;
              newData.password = hash;_context.next = 10;return (
                new _users2.default(newData).save());case 10:user = _context.sent;return _context.abrupt("return",
              res.status(201).send({ data: user, message: 'User was created!' }));case 12:case "end":return _context.stop();}}}, _callee, _this);}))();
  },

  findAllUsers: function findAllUsers(req, res) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {var sort_by, offset, per_page, usersPromise, countPromise, _ref, _ref2, users, count;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              sort_by = {};
              sort_by[req.query.sort_by || 'createdAt'] = req.query.order_by || 'desc';
              offset = parseInt(req.query.offset) || 0;
              per_page = parseInt(req.query.per_page) || 2;
              usersPromise =
              _users2.default.find(req.filters).
              skip(offset).
              limit(per_page).
              sort(sort_by);
              countPromise = _users2.default.countDocuments(req.filters);_context2.next = 8;return (
                Promise.all([usersPromise, countPromise]));case 8:_ref = _context2.sent;_ref2 = _slicedToArray(_ref, 2);users = _ref2[0];count = _ref2[1];return _context2.abrupt("return",
              res.status(200).send({ data: users, count: count }));case 13:case "end":return _context2.stop();}}}, _callee2, _this2);}))();
  },

  findOneUser: function findOneUser(req, res, next) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {var user;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                _users2.default.findOne({ _id: req.params.id }));case 2:user = _context3.sent;if (
              user) {_context3.next = 7;break;}return _context3.abrupt("return",
              next());case 7:return _context3.abrupt("return",

              res.status(200).send({ data: user }));case 8:case "end":return _context3.stop();}}}, _callee3, _this3);}))();

  },

  updateUser: function updateUser(req, res, next) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {var user;return regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                _users2.default.findOne(req.id));case 2:user = _context4.sent;if (
              user) {_context4.next = 7;break;}return _context4.abrupt("return",
              next());case 7:

              user.username = req.body.username;
              user.password = req.body.password;
              user.email = req.body.email;
              user.age = req.body.age;
              user.permissions = req.body.permissions;_context4.next = 14;return (
                user.save());case 14:return _context4.abrupt("return",

              res.status(200).send({ data: user, message: 'User was updated!' }));case 15:case "end":return _context4.stop();}}}, _callee4, _this4);}))();

  },

  deleteUser: function deleteUser(req, res, next) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {var user;return regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                _users2.default.findOne(req.id));case 2:user = _context5.sent;if (
              user) {_context5.next = 7;break;}return _context5.abrupt("return",
              next());case 7:_context5.next = 9;return (

                user.deleteOne());case 9:
              res.status(200).send({ message: "User was removed!" });case 10:case "end":return _context5.stop();}}}, _callee5, _this5);}))();

  },

  deleteAllUsers: function deleteAllUsers(req, res) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {var users;return regeneratorRuntime.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                _users2.default.find().deleteMany({}));case 2:users = _context6.sent;return _context6.abrupt("return",
              res.status(200).send({ message: "Users were removed!" }));case 4:case "end":return _context6.stop();}}}, _callee6, _this6);}))();
  } };
//# sourceMappingURL=users.controller.js.map