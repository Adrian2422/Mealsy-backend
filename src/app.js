import dotenv from 'dotenv';
dotenv.config({path: '.env'});

import express from 'express';
import { join } from 'path';
import config from './config/config';
import { notFound, catchErrors } from './middlewares/errors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from './config/passport';
import register from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';
import usersApi from './routes/users.routes';
import recipesApi from './routes/recipes.routes';
import authApi from './routes/auth.routes';
import userUtils from './controllers/users.controller';

// Connect to database
import dbConfig from './config/database';
import mongoose from 'mongoose';

// Configure passport
passport();

mongoose.connect(dbConfig.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// routes config
app.use('/api', authApi());
app.use('/api', usersApi());
app.use('/api', recipesApi());

// errors handling
app.use(notFound);
app.use(catchErrors);

// let's play!
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is up on port ${process.env.PORT || 3000}!`);
});
