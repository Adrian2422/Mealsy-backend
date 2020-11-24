"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.default =


validateRecipe;var _validator = require("validator");var _mongoose = require("mongoose");function validateRecipe(req, res, next) {
  var newData = {};
  var validData = [];var _req$body =
  req.body,name = _req$body.name,tags = _req$body.tags,photo = _req$body.photo,ingredients = _req$body.ingredients,instructions = _req$body.instructions,link = _req$body.link,creator = _req$body.creator;
  // validate name
  newData.name = "" + name[0].toUpperCase() + name.slice(1);
  validData.push(name.length <= 50);
  // validate tags
  newData.tags = tags.split(",");
  validData.push(tags.split(",").length <= 5);
  // validate photo link 
  if (photo.length > 0) {
    validData.push(photo.match(/\.(jpeg|jpg|gif|png)$/) != null);
  } else {
    validData.push(true);
  }
  newData.photo = photo.length ? photo : null;
  // validate ingredients
  newData.ingredients = [];
  if (ingredients.length > 0 || typeof ingredients === 'array') {
    ingredients.forEach(function (item, key) {
      newData.ingredients.push({
        amount: item.amount,
        name: item.name,
        weight: item.weight,
        unit: item.unit });

    });
    validData.push(true);
  } else {
    validData.push(false);
  }
  // validate instructions
  newData.instructions = instructions;
  validData.push(instructions.length > 0);
  // validate link
  if (link.length > 0) {
    var options = {
      protocols: ["http", "https"],
      require_protocol: true,
      require_valid_protocol: true };

    validData.push((0, _validator.isURL)(link));
  } else {
    validData.push(true);
  }
  newData.link = link.length ? link : null;
  // validate creator
  validData.push((0, _mongoose.isValidObjectId)(creator));
  newData.creator = creator;
  // check if any validation was failed
  req.engravedData = validData.includes(false) ? {} : _extends({}, newData);
  next();
}
//# sourceMappingURL=recipes.validator.js.map