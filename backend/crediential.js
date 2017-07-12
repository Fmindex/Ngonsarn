const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('./model/user');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
	function(username, password, done) {
		UserModel.findOne({ username: username }, function (err, user) {
			if (err) { return done(err); }
      if (!user) {
        return done(null, false, 'Incorrect username.');
      }
      bcrypt.compare(password.toString(), user.password)
        .then((res) => {
          if (res) {
            done(null, user)
          } else {
            done(null, false, 'Incorrect password.');
          }
        })
        .catch((err) => {
          done(err)
        })
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

