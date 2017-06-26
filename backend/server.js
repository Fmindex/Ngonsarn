var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var job = require('./routes/job.js');
var ngonsarn = require('./routes/ngonsarn.js');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ngonsarn');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use('/job', job);
app.use('/ngonsarn', ngonsarn);

app.listen(3001);
console.log("Server running on port 3001");

/*
{
	name:
	location:
	position:
	detail:
	time:
	telephone:
	website:
	cost:
}
*/
