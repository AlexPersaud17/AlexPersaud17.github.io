import React, { Component } from 'react';

class Resume extends Component {
  constructor(){
    super()
    this.state = {
      imgSrc1: "http://i.imgur.com/0qy2xFL.jpg",
      imgSrc2: "http://i.imgur.com/2jRpeek.jpg",
      imgSrc3: "http://i.imgur.com/CMfNGUC.jpg",
      imgSrc4: "http://i.imgur.com/2EdMdJk.jpg"
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(picID) {
    console.log("over " + picID)
  }

  handleMouseOut(picID) {
    console.log("left " + picID)
  }

  render(){
    return(
      <div>
        <div className="section-container" id="resume-text">
          <h1 className="section-text">My Resume</h1>
        </div>
        <div id="resume">

          <div className="project">
            <h1>Popp'n</h1>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc1} alt=""/>
          </div>

          <div className="project">
            <h1>PickYourPoison</h1>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc2} alt=""/>
          </div>

          <div className="project">
            <h1>LaboratoryRetrievers</h1>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc3} alt=""/>
          </div>

          <div className="project">
            <h1>Fooji</h1>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc4} alt=""/>
          </div>

        </div>
      </div>
    )  }
}

export default Resume;