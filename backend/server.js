const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const jobPage = require('./routes/job.js');
const ngonsarnPage = require('./routes/ngonsarn.js');
const userPage = require('./routes/user.js');
const authPage = require('./routes/auth.js')

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ngonsarn');

app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./crediential');

app.use('/job', jobPage);
app.use('/user', userPage);
app.use('/ngonsarn', ngonsarnPage);
app.use('/auth', authPage);

app.listen(3001);
console.log("Server running on port 3001");