"use strict";

var _require = require('bcryptjs'),
    hash = _require.hash;

var _require2 = require('body-parser'),
    json = _require2.json;

var express = require('express');

var router = express.Router();

var jwt = require('jsonwebtoken');

var passport = require('passport');

var user = require('../Model/user');

var configKey = require('../config/database');

var User = require('../Model/user');

var _require3 = require('passport'),
    authenticate = _require3.authenticate;

router.post('/register', function (req, res, next) {
  var newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, function (err, user) {
    if (err) {
      res.json({
        success: false,
        msg: "User Not Rgistered"
      });
    } else {
      res.json({
        success: true,
        msg: "User Rgistered Successfully"
      });
    }
  });
});
router.post('/authenticate', function (req, res, next) {
  // res.send("authenticate");
  var username = req.body.username;
  var password = req.body.password;
  User.getUserByUsername(username, function (err, user) {
    if (err) {
      return "Error :" + err;
    }

    if (!user) {
      return json({
        success: false,
        msg: "User Not Found"
      });
    }

    User.ComparePassword(password, user.password, function (err, isMatch) {
      if (err) {
        return "Error :" + err;
      }

      if (isMatch) {
        var token = jwt.sign({
          user: user
        }, configKey.SecretKey); //can also add expiresIn in object

        res.json({
          success: true,
          msg: "Valid User",
          token: 'jwt ' + token,
          user: {
            id: user.id,
            fullname: user.fullname,
            email: user.email
          }
        });
      } else {
        res.json({
          success: false,
          msg: "wrong password"
        });
      }
    });
  });
});
router.get('/validate', function (req, res, next) {
  res.send("validate");
});
router.get('/profile', passport.authenticate('jwt'), function (req, res, next) {
  res.send("profile");
});
module.exports = router;