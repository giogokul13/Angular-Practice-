"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  res.send(" this link is from a new user !!!!!!!!!");
});
module.exports = router;