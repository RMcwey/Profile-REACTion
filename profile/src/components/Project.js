import React from 'react';
// import {logo} from '../images'

function Project(props) {
  return (
    <div className="img-text-overlay">
      <a href={props.appLink}><img src={props.src} alt={props.alt}/> 
      </a>
      <div className={props.class}>
      <a href={props.appLink}> {props.title} </a>
        {/* <p className="second-card-txt"> {props.title}</p> */}
        <a href={props.githubLink}> Github Link</a>
        </div>
    </div>
  );
}

export default Project;
