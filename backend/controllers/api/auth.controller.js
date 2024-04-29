const passport = require('../../utils/passport');

async function loginUser(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    // User authenticated, return token
    return res.json({ token: info.token });
  })(req, res, next);
}

module.exports = {
  loginUser
};