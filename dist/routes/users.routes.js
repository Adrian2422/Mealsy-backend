'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _users = require('../controllers/users.controller');var _users2 = _interopRequireDefault(_users);
var _errors = require('../middlewares/errors');
var _users3 = require('../middlewares/filters/users.filters');var _users4 = _interopRequireDefault(_users3);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function () {
  var api = (0, _express2.default)();

  // GET /users
  api.get("/users", _users4.default, (0, _errors.catchAsync)(_users2.default.findAllUsers));

  // GET /users/:id
  api.get("/users/:id", (0, _errors.catchAsync)(_users2.default.findOneUser));

  // POST /users
  api.post("/users", (0, _errors.catchAsync)(_users2.default.createUser));

  // PUT /users/:id
  api.put("/users/:id", (0, _errors.catchAsync)(_users2.default.updateUser));

  // DELETE /users/:id
  api.delete("/users/:id", (0, _errors.catchAsync)(_users2.default.deleteUser));

  // DELETE /users
  api.delete("/users", (0, _errors.catchAsync)(_users2.default.deleteAllUsers));

  return api;
};
//# sourceMappingURL=users.routes.js.map