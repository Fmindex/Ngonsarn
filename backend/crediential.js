const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('./model/user');

passport.use(new LocalStrategy(
	function(username, password, done) {
		UserModel.findOne({ username: username }, function (err, user) {
			if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password != '1234') {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
		});
	}
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.find({ id: id })
    .then(user => done(null, user))
    .catch(ex => done(ex));
});

