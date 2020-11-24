'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Recipe = new _mongoose2.default.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20 },

  tags: {
    type: Array,
    lowercase: true },

  photo: {
    type: String },

  ingredients: {
    type: Array,
    required: true },

  instructions: {
    type: String,
    required: true },

  link: {
    type: String },

  creator: {
    type: String,
    required: true } },

{ timestamps: true });exports.default =

_mongoose2.default.model('Recipe', Recipe);
//# sourceMappingURL=recipes.model.js.map