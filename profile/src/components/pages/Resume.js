import React from "react"
import pdf from './resume/programming-resume.pdf'
// import {fall} from './images'

export default function Resume() {
  return (
  <div className="resume-container">
    <div className="resume-link">
      <a href={pdf} target='_blank' rel="noreferrer"> Click Here to view my Resume </a>
    </div>
    <div className="resume-skills">
      <h4>Front-End Skills</h4>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>REACT</li>
        <li>JQuery</li>
        <li>API Calls</li>
        <li>Handlebars</li>
        <li>Anime.JS</li>
        <li>moment.js</li>
        <li>Google Fonts</li>
        <li>Font Awesome</li>
        <li>Photoshop/ photopea</li>
        <li>Application Deployment</li>
      
      <h4>Back-End Skills</h4>
        <li>Javascript</li>
        <li>Node</li>
        <li>SQL</li>
        <li>Sequelize</li>
        <li>MongoDb</li>
        <li>Mongoose</li>
        <li>Express.js</li>
        <li>graph.ql</li>
        <li>Ascii art</li>
        <li>Various node packages</li>
        <li>Progressive Web Applications (PWAs)</li>
        <li>insomnia</li>
        <li>Jest</li>
    </div>
  </div>
  );
}