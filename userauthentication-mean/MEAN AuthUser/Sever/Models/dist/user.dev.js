"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var UserSchema = new schema({
  email: String,
  password: String
});
module.exports = mongoose.model('user', UserSchema, 'Users');