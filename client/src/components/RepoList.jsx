import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
    {
      props.repos.maps((repo, i) => {
        return <RepoListEntry repo ={repo} />
      })
    }
    </ul>
  </div>
)

export default RepoList;

// add a new repo list component to the front end 
// import the repolist entry from the files 

  // iterate through all the repos
    // use repos.map to iterate through all the repos 
    // for each repo create a repo list entry 
      //pass in index as unique key for each of the repo list entries 


