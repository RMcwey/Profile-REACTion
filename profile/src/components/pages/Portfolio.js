import React from "react"
import Project from "../Project";
import {planner, gourmet, weather,shelf} from "../pages/images"

const card1= {
  class: "card1-text",
  title: "Gourmet Guru",
  src: gourmet,
  alt: 'logo',
  appLink: "https://www.mitchelwachtel.me/gourmet-guru/",
  githubLink:'https://github.com/mitchelwachtel/gourmet-guru',
}

const card2= {
  class: "card2-text",
  title: "The Shelf",
  src: shelf,
  alt: 'The Shelf',
  appLink: "http://pure-cliffs-09110.herokuapp.com/",
  githubLink:'https://github.com/RMcwey/Good-Neighbor',
}

const card3= {
  class: "card3-text",
  title: "Day Planner",
  src: planner,
  alt: 'Day Planner',
  appLink: "https://rmcwey.github.io/Day-Planner/",
  githubLink:'https://github.com/RMcwey/Day-Planner',
}

const card4= {
  class: "card4-text",
  title: "Weather App",
  src: weather,
  alt: 'weather',
  appLink: "https://rmcwey.github.io/Weather-Forecaster/",
  githubLink:'https://github.com/RMcwey/Weather-Forecaster',
}

export default function Portfolio() {
  return (
  <div className="portfolio">
    <div className="card1">
      <Project title = {card1.title} src = {card1.src} appLink = {card1.appLink} githubLink = {card1.githubLink} class = {card1.class}/>
    </div>
    <div className="card2">
      <Project title = {card2.title} src = {card2.src} appLink = {card2.appLink} githubLink = {card2.githubLink} class = {card2.class} />
    </div>
    <div className="card3">
      <Project title = {card3.title} src = {card3.src} appLink = {card3.appLink} githubLink = {card3.githubLink} class = {card3.class}/>
    </div>
    <div className="card4">
      <Project title = {card4.title} src = {card4.src} appLink = {card4.appLink} githubLink = {card4.githubLink} class = {card4.class}/>
    </div>
  </div>
  );
}