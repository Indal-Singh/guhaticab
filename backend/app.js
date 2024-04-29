const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const connectDB = require('./db/connection');
require('dotenv').config()
require('./utils/passport');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin/index');
const apiRouter = require('./routes/api/index.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Initialize Passport
app.use(passport.initialize());
// Allow requests from all origins
app.use(cors());
// app.use(cors({
//   origin: process.env.REACT_APP_URL // Replace with your React app's domain
// }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Call the connectDB function to establish a connection
connectDB()
  .then(db => {
    // Use the 'db' object to perform database operations
    console.log('Perform database operations here...');
  })
  .catch(error => {
    console.error('Error:', error);
  });

module.exports = app;
