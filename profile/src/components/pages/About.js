import React from "react"
import {face} from './images'

export default function About() {
  return (
    
  <div className="about-container">
    <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❄
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❄
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❄
      </div>
    </div>
    <div className="about-container">
    <img className="profile-pic" src={face} alt="profile pic"/>
      <div className="profile-text">
        <h2>About Me</h2>
          <p> Welcome to my portfolio page!</p>
          <p> I am a full stack programmer that really enjoys learning new things and working with people! I am an Atlanta native that still lives in the greater Atlanta area. In my personal life I enjoy competitive and difficult games, hiking, playing guitar, singing, song writing, as well as serving as a lay-pastor at my local church. Some of my favorite games are Zelda: Ocarina of Time, Halo: CE, Soulsbourne games and The Last Of Us 1. </p>
      </div>
    </div>
  </div>
  );
}