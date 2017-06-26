const express = require('express');
const router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('ngonsarn',['ngonsarn']);

router.post('/', function(req, res) {
	console.log("FM " + req.body);
	//req.body._id = 0;
	db.ngonsarn.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

router.delete('/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.ngonsarn.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

router.get('/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.ngonsarn.findOne({_id: mongojs.ObjectID(id)}, function(err,doc){
		res.json(doc);
    console.log(doc);
	});
});

router.get('/name/:name', function(req,res){
	var name = req.params.name;
	console.log(name);
	db.ngonsarn.find({name: name}, function(err,doc){
		res.json(doc);
    console.log(doc);
	});
});

router.put('/:id', function(req, res){
	var id = req.params.id;
	//console.log(req.body.name);
	db.ngonsarn.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, location: req.body.location, position: req.body.detail, time: req.body.time, telephone: req.body.telephone, website: req.body.website, cost: req.body.cost}},
		new: true}, function (err,doc) {
			res.json(doc);

		});
});

module.exports = router;