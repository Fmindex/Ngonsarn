const express = require('express');
const router = express.Router();

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

router.get('/:id', function(req, res) {
  UserModel.find({ id: req.params.id })
    .then(data => {
      res.json({
        success: true,
        data: data``
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

router.put('/:id', function(req, res) {
  res.send(`put list id ${req.params.id}`)
})

module.exports = router;