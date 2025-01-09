var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const weatherRouter = require('./routes/weatherRouter');
const error404 = require('./middlewares/error404');
const error500 = require('./middlewares/error500');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/weather', weatherRouter);


// catch 404 and forward to error handler
app.use(error404);

// catch error 500 and forward to error handler
app.use(error500);

module.exports = app;
