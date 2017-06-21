const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('return list of job')
})

router.get('/:id', function(req, res) {
  res.send(`get list id ${req.params.id}`)
})

router.post('/', function(req, res) {
  res.send('insert list to job')
})

router.put('/:id', function(req, res) {
  res.send(`put list id ${req.params.id}`)
})

module.exports = router;