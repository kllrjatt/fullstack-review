var express = require('express');
var Promies = require('bluebird');
var request = require('request');
var bodyParser = require('body-parser');
var Repo = require('../database');
var github = require('./github.js');
var rp = require('request-promise');

var app = express();

app.use(bodyParser.json());

// use promises and request promises 
// use body parse 
// use request 
// import the repo from mongo 
// import the git hub authentication token 

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // get the search information
  // get the github client id 
  // get the client authentication token 
  // create a options object 
  // add the url to it 
  // edit url to add search information and client id for autneticated searches 
  // add user agent to it 
  var term = req.body.term;
  var clientID = github.github.clientId;
  var clientSecret = github.github.clientSecret;
  var options = {
    url: `https://api.github.com/users/${term}/repos?client_id=${clientID}&client_secret=${clientSecret}`,
    headers: {
      'User-Agent': 'GitHubAPI'
    }
  };
  // start the request promies chain  using the options 
  // when there is data, parse the data to make it readable 
  // itreate through the returned reports 
  // for each repo , create a new modle entry into the mongo db 
  // track if all entries are being entered into the database 
  // once all entries have been added, close the connection by sending res.end 
  // throw error , if there is a error , cath it and console log the error 

  rp(options)
    .then((repos) => {
      var jsonRepos = JSON.stringify(repos);
      var tracker = 0;

      repos.forEach((repo, index, repos) => {
        REPO.create({
          repoName: repo.name,
          repoOwner: repo.owner.login,
          avatarUrl: repo.owner.avatar_url,
          userUrl: repo.owner.url,
          repoDescription: repo.description,
          repoUrl: repo.html_url,
          forks: repo.forks,
          watchers: repo.watchers,
        }, function (error, doc) {
          tacker++;
          if (tacker = repos.length) {
            res.end();
          }
        });
      });
    })
    .catch((erorr) => {
      console.log(error);
      res.end();
    });
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


