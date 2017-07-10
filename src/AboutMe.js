import React, { Component } from 'react';
import Carousel from './Carousel.js';

class AboutMe extends Component {
  render(){
    return(
      <div>
        <div className="section-container" id="about-text">
          <h1 className="section-text">About Me</h1>
        </div>
        <div id="about">
          <Carousel />
          
        </div>
      </div>
    )  }
}

export default AboutMe;