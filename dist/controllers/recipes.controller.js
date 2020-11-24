'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _recipes = require('../models/recipes.model');var _recipes2 = _interopRequireDefault(_recipes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}exports.default =

{
  createRecipe: function createRecipe(req, res) {var _this = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {var engravedData, recipe;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              engravedData = req.engravedData;if (!(
              Object.keys(engravedData).length > 0 && engravedData.constructor === Object)) {_context.next = 8;break;}_context.next = 4;return (
                new _recipes2.default(engravedData).save());case 4:recipe = _context.sent;return _context.abrupt('return',
              res.status(201).send({ data: recipe, message: 'Recipe was created!' }));case 8:return _context.abrupt('return',

              res.status(422).send({ data: req.body, message: 'Some data is invalid!' }));case 9:case 'end':return _context.stop();}}}, _callee, _this);}))();

  },

  findAllRecipes: function findAllRecipes(req, res) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {var sort_by, offset, per_page, recipesPromise, countPromise, _ref, _ref2, recipes, count;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              sort_by = {};
              sort_by[req.query.sort_by || 'createdAt'] = req.query.order_by || 'desc';
              offset = parseInt(req.query.offset) || 0;
              per_page = parseInt(req.query.per_page) || 2;
              recipesPromise =
              _recipes2.default.find().
              skip(offset).
              limit(per_page).
              sort(sort_by);
              countPromise = _recipes2.default.countDocuments();_context2.next = 8;return (
                Promise.all([recipesPromise, countPromise]));case 8:_ref = _context2.sent;_ref2 = _slicedToArray(_ref, 2);recipes = _ref2[0];count = _ref2[1];return _context2.abrupt('return',
              res.status(200).send({ data: recipes, count: count }));case 13:case 'end':return _context2.stop();}}}, _callee2, _this2);}))();
  },

  findOneRecipe: function findOneRecipe(req, res, next) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {var recipe;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                _recipes2.default.findOne({ _id: req.params.id }));case 2:recipe = _context3.sent;if (
              recipe) {_context3.next = 7;break;}return _context3.abrupt('return',
              next());case 7:return _context3.abrupt('return',

              res.status(200).send({ data: recipe }));case 8:case 'end':return _context3.stop();}}}, _callee3, _this3);}))();

  },

  updateRecipe: function updateRecipe(req, res, next) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {var recipe, _req$body, name, tags, photo, ingredients, instructions, link, creator;return regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                _recipes2.default.findOne(req.id));case 2:recipe = _context4.sent;if (
              recipe) {_context4.next = 7;break;}return _context4.abrupt('return',
              next());case 7:_req$body =

              req.body, name = _req$body.name, tags = _req$body.tags, photo = _req$body.photo, ingredients = _req$body.ingredients, instructions = _req$body.instructions, link = _req$body.link, creator = _req$body.creator;
              recipe.name = '' + name[0].toUpperCase() + name.slice(1);
              recipe.tags = tags.split(',');
              recipe.photo = photo;
              recipe.ingredients = [];
              ingredients.forEach(function (item, key) {
                recipe.ingredients.push({
                  amount: item.amount,
                  name: item.name,
                  weight: item.weight,
                  unit: item.unit });

              });
              recipe.instructions = instructions;
              recipe.link = link;
              recipe.creator = creator;_context4.next = 18;return (

                recipe.save());case 18:return _context4.abrupt('return',
              res.status(200).send({ data: recipe, message: 'Recipe was updated!' }));case 19:case 'end':return _context4.stop();}}}, _callee4, _this4);}))();

  },

  deleteOneRecipe: function deleteOneRecipe(req, res, next) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {var recipe;return regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                _recipes2.default.findOne(req.id));case 2:recipe = _context5.sent;if (
              recipe) {_context5.next = 7;break;}return _context5.abrupt('return',
              next());case 7:_context5.next = 9;return (

                recipe.deleteOne());case 9:
              res.status(200).send({ message: "Recipe was removed!" });case 10:case 'end':return _context5.stop();}}}, _callee5, _this5);}))();

  },

  deleteAllRecipes: function deleteAllRecipes(req, res) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {var recipes;return regeneratorRuntime.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                _recipes2.default.find().deleteMany({}));case 2:recipes = _context6.sent;return _context6.abrupt('return',
              res.status(200).send({ message: "Recipes were removed!" }));case 4:case 'end':return _context6.stop();}}}, _callee6, _this6);}))();
  } };
//# sourceMappingURL=recipes.controller.js.map