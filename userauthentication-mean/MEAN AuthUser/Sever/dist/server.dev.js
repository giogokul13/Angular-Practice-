"use strict";

var express = require('express');

var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
app.get('/', function (req, res) {
  res.send(" hi this message is from server");
});
app.listen(3000, function () {
  console.log(" the server is running in port 3000");
});