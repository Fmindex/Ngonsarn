var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: { 
    type: String, 
    unique : true, 
    required : true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    first: {
      type: String,
      unique: true
    },
    last: {
      type: String,
      unique: true
    }
  }
});

module.exports = mongoose.model('User', UserSchema);