import React from "react"
import {face} from './images'

export default function About() {
  return (
  <div>  
  <div className="about-img">
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
          <p className="about-p-welcome"> Welcome to my portfolio page!</p>
          <p className="about-p"> I am an experienced, curious, and passionate full stack developer that really enjoys growing with other people! Ever since I was a child, computers have always been a hobby of mine. One of my favorite things to do was build my own PCs for personal use and tweak programs, games, and other software and hardware for optimization. So, after years of building a successful retail career, thinking that my passion would only ever be a hobby, I decided to pursue programming. When going through GA Tech’s full-stack boot camp, all the creativity, problem-solving, troubleshooting, and joys of success I felt in my hobby came to life in something I could pursue as a career!
          </p>   
          <p className="about-p">  In my personal life, I enjoy difficult and competitive games of all types, hiking, playing guitar, singing, song writing, and spending time with friends and family.</p>
      </div>
    </div>
    </div>
  </div>
  );
}