const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const UserModel = require('../model/user');

router.get('/', function(req, res) {
  UserModel.find({})
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

router.get('/:name', function(req, res) {
  UserModel.find({ username: req.params.name })
    .then(data => {
      if (data.length === 0) {
        throw new Error('Data not found');
      }
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
router.post('/', function(req, res) {
  var instance = new UserModel({
    id: new mongoose.Types.ObjectId,
    username: req.body.username,
    password: req.body.password,
    name: {
      first: req.body.name.first,
      last: req.body.name.last
    }
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

router.delete('/:name', function(req, res) {
  UserModel
    .find({ username : req.params.name })
    .remove()
    .then(() => {
      res.json({
        success: true
      })
    })
    .catch(err => {
      res.status(500).json({
        success: true,
        message: err.message
      })
    })
})

router.put('/:id', function(req, res) {
  res.send(`put list id ${req.params.id}`)
})

module.exports = router;