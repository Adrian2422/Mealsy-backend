'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.default =


getFilters;var _users = require('../../models/users.model');var _users2 = _interopRequireDefault(_users);var _qs = require('qs');var _qs2 = _interopRequireDefault(_qs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function getFilters(req, res, next) {
  var filters = _qs2.default.parse(req.query);

  var searchFilter = {};
  if (filters.q) {
    searchFilter = {
      username: {
        $regex: new RegExp(filters.q, 'i') } };


  }

  req.filters = _extends({}, searchFilter);
  next();
}
//# sourceMappingURL=users.filters.js.map