'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _recipes = require('../controllers/recipes.controller');var _recipes2 = _interopRequireDefault(_recipes);
var _auth = require('../middlewares/auth');var _auth2 = _interopRequireDefault(_auth);
var _errors = require('../middlewares/errors');
var _recipes3 = require('../middlewares/validators/recipes.validator');var _recipes4 = _interopRequireDefault(_recipes3);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function () {
  var api = (0, _express2.default)();

  // POST /recipes
  api.post("/recipes", _auth2.default, _recipes4.default, (0, _errors.catchAsync)(_recipes2.default.createRecipe));

  // GET /recipes
  api.get("/recipes", (0, _errors.catchAsync)(_recipes2.default.findAllRecipes));

  // GET /recipes/:id
  api.get("/recipes/:id", (0, _errors.catchAsync)(_recipes2.default.findOneRecipe));

  // PUT /recipes/:id
  api.put("/recipes/:id", (0, _errors.catchAsync)(_recipes2.default.updateRecipe));

  // DELETE /recipes/:id
  api.delete("/recipes/:id", (0, _errors.catchAsync)(_recipes2.default.deleteOneRecipe));

  // DELETE /recipes/
  api.delete("/recipes", (0, _errors.catchAsync)(_recipes2.default.deleteAllRecipes));

  return api;
};
//# sourceMappingURL=recipes.routes.js.map