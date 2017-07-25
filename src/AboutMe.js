import React, { Component } from 'react';
import Carousel from './Carousel.js';
import ProfilePic from './images/profilepic.jpg'
class AboutMe extends Component {
  render(){
    return(
      <div>
        <div className="section-container" id="about-text">
          <h1 className="section-text">About Me</h1>
        </div>
        <div id="about">
          <h1 id="about-me-header"> Hey that's me</h1>
          <img src={ProfilePic} alt="Hard At Work" id="about-me-profile-pic"/>
          <div id="about-me-bio">
            
            <h2>This is in the 3rd person because, well, it make's it easier for you to talk about me if you just memorize this word for word.</h2>

            <p>Alex was born in the summer-ish of 1994, in the melting pot that is Queens, in the greatest city in the world. Pretty normal childhood, nothing out of the ordinary. Alex was first introduced to a computer language in a mandatory elective in high school, and few years later in his academic career, Alex realized that he had a knack for typing words on a screen and making them come to life through the magic that is computer programming.</p>

            <p>With the help of a fantastic coding school in downtown Manhattan, Alex was able to refine his skills, while at the same time, learning how to teach himself. He thought what better way to showcase his awesome skills, than creating a wesbite, so here we are.</p>
          </div>

          <Carousel />
        </div>
      </div>
    )  }
}

export default AboutMe;