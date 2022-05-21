import React from 'react';
// import {logo} from '../images'

function Project(props) {
  return (
    <div className="text-center">
      <figure class="card1">
        <a href={props.appLink}> <img src={props.src} alt={props.alt}/>
          <button class="second-card-txt"> {props.title}
            <a href={props.githubLink}> Github Link</a>
          </button>
        </a>
      </figure>
    </div>
  );
}

export default Project;
