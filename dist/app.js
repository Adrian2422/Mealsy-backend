'use strict';var _dotenv = require('dotenv');var _dotenv2 = _interopRequireDefault(_dotenv);


var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _path = require('path');
var _config = require('./config/config');var _config2 = _interopRequireDefault(_config);
var _errors = require('./middlewares/errors');
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _cookieParser = require('cookie-parser');var _cookieParser2 = _interopRequireDefault(_cookieParser);
var _passport = require('./config/passport');var _passport2 = _interopRequireDefault(_passport);
var _register = require('babel-core/register');var _register2 = _interopRequireDefault(_register);
var _babelPolyfill = require('babel-polyfill');var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);
var _users = require('./routes/users.routes');var _users2 = _interopRequireDefault(_users);
var _recipes = require('./routes/recipes.routes');var _recipes2 = _interopRequireDefault(_recipes);
var _auth = require('./routes/auth.routes');var _auth2 = _interopRequireDefault(_auth);
var _users3 = require('./controllers/users.controller');var _users4 = _interopRequireDefault(_users3);


var _database = require('./config/database');var _database2 = _interopRequireDefault(_database);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_dotenv2.default.config({ path: '.env' }); // Connect to database

// Configure passport
(0, _passport2.default)();

_mongoose2.default.connect(_database2.default.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true });

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connection.on('error', function (err) {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.set('views', (0, _path.join)(__dirname, 'views'));
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieParser2.default)());

// routes config
app.use('/api', (0, _auth2.default)());
app.use('/api', (0, _users2.default)());
app.use('/api', (0, _recipes2.default)());

// errors handling
app.use(_errors.notFound);
app.use(_errors.catchErrors);

// let's play!
app.listen(_config2.default.server.port, function () {
    console.log('Server is up on port ' + _config2.default.server.port + '!');
});
//# sourceMappingURL=app.js.map