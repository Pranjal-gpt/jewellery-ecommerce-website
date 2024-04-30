const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fullname:{type:String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address1: { type: String },
  address2: { type: String ,default:''},
  phone: { type: String },
  userType: { type: String,default: 'customer' },
},
{collection:"Users"});

const User = mongoose.model('Users', userSchema);

module.exports = User;
