import React from "react"
import Project from "../Project";
import {planner, gourmet, weather,shelf, reEngage, generator} from "../pages/images"

const card1= {
  class: "card1-text",
  title: "Gourmet Guru",
  src: gourmet,
  alt: 'logo',
  appLink: "https://www.mitchelwachtel.me/gourmet-guru/",
  githubLink:'https://github.com/mitchelwachtel/gourmet-guru',
  description: 'Gourmet Guru was our first class project. It was an app designed to keep track of your favorite restaurants and dishes. Fully equipped with a rating system, comment section and API calls to pull information on your restaurants. The other two group members were an utter joy to work with and we all meshed well evenly splitting the work and collaborating consistently.'
}

const card2= {
  class: "card2-text",
  title: "The Shelf",
  src: shelf,
  alt: 'The Shelf',
  appLink: "http://pure-cliffs-09110.herokuapp.com/",
  githubLink:'https://github.com/RMcwey/Good-Neighbor',
  description: 'The Shelf was a full stack group project. It was designed to for communities to be able to connect with their neighbors, create accounts and keep track of borrowed items. I was team lead and handled all the back end with my friend Patrick Ham, a large portion of the front-end and reviewed/ merged every pull request on GitHub along with providing assistance to my team members.'
}

const card3= {
  class: "card3-text",
  title: "Re-Engage",
  src: reEngage,
  alt: 'Re-Engage',
  appLink: "https://warm-gorge-10209.herokuapp.com/",
  githubLink:'https://github.com/RMcwey/Re-engage',
  description: 'Re-Engage was our final group project. This application helps the user to memorize or further engage with any desired text that either they upload or has been uploaded by other users. It creates a flashcard style game that finds parts of speech and removes random useful words, requiring the user to select the right word to move forward. It saves the user progress and is displayed in their account page. It also has a built-in Bible app that I developed.'
}

const card4= {
  class: "card4-text",
  title: "Weather App",
  src: weather,
  alt: 'weather',
  appLink: "https://rmcwey.github.io/Weather-Forecaster/",
  githubLink:'https://github.com/RMcwey/Weather-Forecaster',
  description: 'This was a custom weather app that I developed to use third party API calls to OpenWeather API. It validates user input so that as long as the spelling is correct, the information can be retrieved. It starts by returning GPS coordinates that the app then converts to the city name and state using another API call. The app saves previous searches to the local storage and also updates the icons for the current weather and color for the UV index. The clear button will clear the data from local storage.'
}

const card5= {
  class: "card5-text",
  title: "Team Profile Generator",
  src: generator,
  alt: 'profile generator',
  appLink: "https://rmcwey.github.io/Team-Profile-Generator/",
  githubLink:'https://github.com/RMcwey/Team-Profile-Generator',
  description: "This is a back-end application that mainly uses JavaScript, Node.js, jQuery, fs, inquirer, jest, Bootstrap, and fontawesome. It generates an HTML page with all the user's team, their names, position, employee ID, email addresses and links to their GitHub pages. The user will need to clone the repo to their device, install and then run the program. Once it runs, they will be prompted in their terminal to enter in the desired information. Once completed, the HTML page will be generated."
}

const card6= {
  class: "card6-text",
  title: "Day Planner",
  src: planner,
  alt: 'Day Planner',
  appLink: "https://rmcwey.github.io/Day-Planner/",
  githubLink:'https://github.com/RMcwey/Day-Planner',
  description: 'This Day Planner was a solo project designed to simply record what the user would like to do for the day. It uses local storage and updates the color based on current time (grey for past, red for current, green for future). The clear button clears the whole list and was added to each for convenience on mobile devices.'
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
    <div className="card5">
      <Project title = {card5.title} src = {card5.src} appLink = {card5.appLink} githubLink = {card5.githubLink} class = {card5.class} description = {card5.description}/>
    </div>
    <div className="card6">
      <Project title = {card6.title} src = {card6.src} appLink = {card6.appLink} githubLink = {card6.githubLink} class = {card6.class} description = {card6.description}/>
    </div>
  </div>
  );
}