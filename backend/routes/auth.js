const express = require('express');
const router = express.Router();

const passport = require('passport');

const responseError  = (res, message) => {
  res.status(500).json({
    success: false,
    message
  })
}

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if(err) { return responseError(res, err.message); }
    if(!user) { return responseError(res, info); }
    req.logIn(user, function(err) {
      if(err) { responseError(res, err.message); }
      res.json({
        success: true
      })
    })
  })(req, res, next);
});

module.exports = router;