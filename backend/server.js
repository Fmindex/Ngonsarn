var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('ngonsarn',['ngonsarn']);
var bodyParser = require('body-parser');

var job = require('./routes/job.js')

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.post('/ngonsarn/', function(req, res) {
	console.log("FM " + req.body);
	//req.body._id = 0;
	db.ngonsarn.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/ngonsarn/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.ngonsarn.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/ngonsarn/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.ngonsarn.findOne({_id: mongojs.ObjectID(id)}, function(err,doc){
		res.json(doc);
    console.log(doc);
	});
});

app.get('/ngonsarn/name/:name', function(req,res){
	var name = req.params.name;
	console.log(name);
	db.ngonsarn.find({name: name}, function(err,doc){
		res.json(doc);
    console.log(doc);
	});
});

app.put('/ngonsarn/:id', function(req, res){
	var id = req.params.id;
	//console.log(req.body.name);
	db.ngonsarn.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, location: req.body.location, position: req.body.detail, time: req.body.time, telephone: req.body.telephone, website: req.body.website, cost: req.body.cost}},
		new: true}, function (err,doc) {
			res.json(doc);

		});
});

app.use('/job', job);

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
