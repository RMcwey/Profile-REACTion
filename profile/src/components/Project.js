import React from 'react';
import {github} from './pages/images'
import Collapsible from 'react-collapsible'

// function CollapseMe() {
//   if () {

//   }
// }

function Project(props) {
  return (
    <div className="project-container content">
      <Collapsible trigger={props.title}>
      <a href={props.appLink}> <img src={props.src} alt={props.alt}/>
      </a>
      <p className='description'>{props.description}</p>
      <div className={props.class}>
      <a href={props.appLink}> {props.title} </a>
        {/* <p className="second-card-txt"> {props.title}</p> */}
        <div className='port-icon'>
          <a href={'https://github.com/RMcwey'}> <img src={github} alt='github'/>
          </a>
        </div>
        {/* <a href={props.githubLink}> Github Link</a> */}
        </div>
        </Collapsible>
    </div>
  );
}

export default Project;


{/* <img src={props.src} alt={props.alt}/>  */}