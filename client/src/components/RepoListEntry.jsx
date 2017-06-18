import React from 'react';

const RepoListEntry = (props) => (
  <li>
    <h3>{props.repo.repoName}</h3>
    <p>{props.repo.repoOwner}</p>
    <p>{props.repo.userUrl}</p>
    <p>{props.repo.repoUrl}</p>
    <p>{props.repo.repoDescription}</p>
    <p>{props.repo.forks}</p>
    <p>{props.repo.watches}</p>
    <p></p>
  </li>
)
//import react from react 
// create a const repo list entry 
// pass int he props 
// write html template
// pass in information about each repo from the props 
// pass in name, url , description and owner to display 
// add other information as needed to the list entry 

export default RepoListEntry;