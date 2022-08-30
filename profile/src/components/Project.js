import React from 'react';
import {github} from './pages/images'
import Collapsible from 'react-collapsible'

function Project(props) {
  return (
    <div className="project-container content">
      <Collapsible trigger={props.title}>
      <a href={props.appLink}> <img src={props.src} alt={props.alt}/>
      </a>
      <p className='description'>{props.description}</p>
      <div className={props.class}>
      <a className='port-link-text' href={props.appLink}> {props.title} </a>
        <div className='port-icon'>
          <a href={props.githubLink}> <img src={github} alt='github'/>
          </a>
        </div>
      </div>
      </Collapsible>
    </div>
  );
}

export default Project;