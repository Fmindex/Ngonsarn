var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const JobSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Job', JobSchema);