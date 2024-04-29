// config/passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

    if (!user || !user.isValidPassword(password)) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

    return done(null, user, { token });
  } catch (error) {
    return done(error);
  }
}));

module.exports = passport;
