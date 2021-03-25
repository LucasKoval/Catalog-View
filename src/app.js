//----------* GLOBAL REQUIRE *----------//
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//----------* MIDDLEWARES REQUIRE *----------//


//----------* EXPRESS() *----------//
const app = express();

//----------* MIDDLEWARES *----------//
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

//----------* VIEW ENGINE SETUP *----------//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//----------* ROUTES REQUIRE *----------//
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

//----------* ROUTES USE() *----------//
app.use('/', productsRouter);
app.use('/user', usersRouter);


//----------* CATCH 404 *----------//
app.use((req, res, next) => next(createError(404)));

//----------* ERROR HANDLER *----------//
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

//----------* EXPORTS APP *----------//
module.exports = app;