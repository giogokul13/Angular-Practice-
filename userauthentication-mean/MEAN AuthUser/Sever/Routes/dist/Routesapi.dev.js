"use strict";

var express = require('express');

var router = express.Router();

var User = require('../Models/user');

var mongoose = require('mongoose');

var database = 'mongodb+srv://newuser:newuser@newcluster.4pqot.mongodb.net/test';
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log("Error : " + err);
  } else {
    console.log(" DataBase mongoDB is connected");
  }
});
router.get('/', function (req, res) {
  res.send(" this link is from   new user !!!!!!!!!");
});
router.post('/register', function (req, res) {
  var userdata = req.body;
  var user = new User(userdata);
  user.save(function (error, registered) {
    if (error) {
      console.log("Error : " + error);
    } else {
      res.status(200);
      res.send(registered);
    }
  });
});
router.post('/login', function (req, res) {
  var userdata = req.body;
  User.findOne({
    email: userdata.email
  }, function (error, user) {
    if (error) {
      console.log(" Error : " + error);
    } else {
      if (!user) {
        res.status(401);
        res.send("Invalid emailaddress");
      } else {
        if (user.password !== userdata.password) {
          res.status(401);
          res.send("invalid credentials");
        } else {
          res.status(200);
          res.send(user);
        }
      }
    }
  });
});
module.exports = router;