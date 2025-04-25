const mongoose = require('mongoose');

// Define the main User schema
const userSchema = new mongoose.Schema({
  id: { type: Number},
  name: { type: String},
  username: { type: String },
  email: { type: String},
  role : {type:String},
  mobile_no :{type:Number}

});

// Create and export the User model
const users = mongoose.model('user', userSchema);

module.exports = users;
