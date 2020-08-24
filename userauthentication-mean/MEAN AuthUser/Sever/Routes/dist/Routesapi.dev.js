"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var database = 'mongodb+srv://newuser:newuser@newcluster.4pqot.mongodb.net/test';
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log("Error : " + err);
  } else {
    console.log(" DataBase is connected");
  }
});
router.get('/', function (req, res) {
  res.send(" this link is from a new user !!!!!!!!!");
});
module.exports = router;