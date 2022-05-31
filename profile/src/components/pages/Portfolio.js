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
  description: 'Gourmet Guru was our first class project. It was an app designed to keep track of your favorite restaurants and dishes. Fully equipped with a rating system, comment section and api calls to pull information on your restaurants. The other two group members were an utter joy to work with and we all meshed well evenly splitting the work and collaborating consistently.'
}

const card2= {
  class: "card2-text",
  title: "The Shelf",
  src: shelf,
  alt: 'The Shelf',
  appLink: "http://pure-cliffs-09110.herokuapp.com/",
  githubLink:'https://github.com/RMcwey/Good-Neighbor',
  description: 'The Shelf was a full-stack group project. It was designed to for communities to be able to connect with their neighbors, create accounts and keep track of borrowed items. I was team lead and handled all the back-end with my friend Patrick Ham, a large portion of the front-end and reviewed/ merged every pull request on github along with providing assitance to my team members.'
}

const card3= {
  class: "card3-text",
  title: "Day Planner",
  src: planner,
  alt: 'Day Planner',
  appLink: "https://rmcwey.github.io/Day-Planner/",
  githubLink:'https://github.com/RMcwey/Day-Planner',
  description: 'This Day Planner was a solo project designed to simply record what the user would like to do for the day. It uses local storage and updates the color based on current time (grey for past, red for current, green for future). The clear button clears the whole list and was added to each for convenience on mobile devices.'
}

const card4= {
  class: "card4-text",
  title: "Weather App",
  src: weather,
  alt: 'weather',
  appLink: "https://rmcwey.github.io/Weather-Forecaster/",
  githubLink:'https://github.com/RMcwey/Weather-Forecaster',
  description: 'This was a custom weather app that I developed to use third party API calls to OpenWeather API. It validates user input so that as long as the spelling is correct, the information can be retrieved. It starts by returning gps coordinates that the app then converts to the city name and state using another API call. The app saves previous searches to the local storage and also updates the icons for the current weather and color for the UV index. The clear button will clear the data from local storage.'
}

export default function Portfolio() {
  return (
  <div className="portfolio">
    <div className="card1">
      <Project title = {card1.title} src = {card1.src} appLink = {card1.appLink} githubLink = {card1.githubLink} class = {card1.class} description = {card1.description} />
    </div>
    <div className="card2">
      <Project title = {card2.title} src = {card2.src} appLink = {card2.appLink} githubLink = {card2.githubLink} class = {card2.class} description = {card2.description}/>
    </div>
    <div className="card3">
      <Project title = {card3.title} src = {card3.src} appLink = {card3.appLink} githubLink = {card3.githubLink} class = {card3.class} description= {card3.description}/>
    </div>
    <div className="card4">
      <Project title = {card4.title} src = {card4.src} appLink = {card4.appLink} githubLink = {card4.githubLink} class = {card4.class} description = {card4.description}/>
    </div>
  </div>
  );
}