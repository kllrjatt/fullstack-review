var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  repoName: String,
  repoOwner: String,
  avatarUrl: String,
  userUrl: String,
  repoDescription: String,
  repoUrl: String,
  forks: Number,
  watchers: Number,
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;