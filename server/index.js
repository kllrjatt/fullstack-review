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
  // TODOa
});

app.get('/repos', function (req, res) {
  // use find function to get all the data from the repos 
  // chain methord to limit results to ONLY 25 
  // sort the data to only shows the results sorted by watcherss
  // execute the querry 
  Repo.find({}).limit(25).sort({ watchers: -1 }).exec(function (error, results) {
    if (error) {
      console.log('error getting items from the database');
      res.end();
    } else {
      res.end(JSON.stringify(results));
    }
  });
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