import React from "react"
import Project from "../Project";
import {face, logo} from "../pages/images"

const card1= {
  class: "card1",
  title: "Tester",
  src: face,
  alt: 'logo',
  appLink: 'https://github.com/RMcwey',
  githubLink:'https://github.com/RMcwey',
}

const card2 = {
    title: "Tester 2",
    src: logo,
    appLink: 'https://github.com/RMcwey',
    githubLink:'https://github.com/RMcwey',
}

export default function Portfolio() {
  return (
  <div className="portfolio">
    <div className="card1">
      <Project title = {card1.title} src = {card1.src} appLink = {card1.appLink} githubLink = {card1.githubLink}/>
    </div>
      <Project title = {card2.title} src = {card2.src} appLink = {card2.appLink} githubLink = {card2.githubLink} />
  </div>
  );
}