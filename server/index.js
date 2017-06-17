var express = require('express');
var Promies = require('bluebird');
var request = require('request');
var bodyParser = require('body-parser');
var Repo = require('../database');
var github = require('./github.js');
var rp = require('request-promise');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});


// use promises and request promises 
// use body parse 
// use request 
// import the repo from mongo 
// import the git hub authentication token 