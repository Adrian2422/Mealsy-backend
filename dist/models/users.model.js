'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _validator = require('validator');var _validator2 = _interopRequireDefault(_validator);
var _passportLocalMongoose = require('passport-local-mongoose');var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var User = new _mongoose2.default.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 6 },

  email: {
    type: String,
    unique: true,
    required: true },

  age: {
    type: Number },

  permissions: {
    type: Number,
    required: true,
    enum: [1, 2, 3] } },

{ timestamps: true });

User.plugin(_passportLocalMongoose2.default, { username: 'username' });exports.default =

_mongoose2.default.model('User', User);
//# sourceMappingURL=users.model.js.map