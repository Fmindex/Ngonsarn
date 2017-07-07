var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  name: {
    first: String,
    last: String
  }
});

module.exports = mongoose.model('User', UserSchema);