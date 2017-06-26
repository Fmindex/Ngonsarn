const express = require('express');
const router = express.Router();

const JobModel = require('../model/job');

router.get('/', function(req, res) {
  JobModel.find({})
    .then(data => {
      res.json({
        success: true,
        data: data
      })
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: err.message
      })
    })
})

router.get('/:id', function(req, res) {
  res.send(`get list id ${req.params.id}`)
})

router.post('/', function(req, res) {
  var instance = new JobModel({
    name: req.body.name,
    description: req.body.description
  });
  instance.save()
    .then(() => {
      res.json({
        success: true
      })
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message
      })
    });
})

router.put('/:id', function(req, res) {
  res.send(`put list id ${req.params.id}`)
})

module.exports = router;