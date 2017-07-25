  import React, { Component } from 'react';

class Resume extends Component {
  constructor(){
    super()
    this.state = {
      imgSrc1: "http://i.imgur.com/jjMDpDT.gif",
      imgSrc2: "http://i.imgur.com/B4idh6z.gif",
      imgSrc3: "http://i.imgur.com/nk2RtWQ.gif",
      imgSrc4: "http://i.imgur.com/RrgRfHA.gif"
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
            <a href="https://poppn.herokuapp.com/"><h1>Popp'n</h1></a>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc1} alt=""/>
          </div>

          <div className="project">
            <a href="https://pickyourpoison.herokuapp.com/"><h1>PickYourPoison</h1></a>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc2} alt="" />
          </div>

          <div className="project">
            <a href="https://github.com/AlexPersaud17/Laboratory-Retrievers"><h1>LaboratoryRetrievers</h1></a>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc3} alt=""/>
          </div>

          <div className="project">
            <a href="https://www.facebook.com/Fooji-322635284834012/"><h1>Fooji</h1></a>
            <img className="project-gif" onMouseOver={this.handleMouseOver(this)} onMouseOut={this.handleMouseOut(this)} src={this.state.imgSrc4} alt=""/>
          </div>

        </div>
      </div>
    )  }
}

export default Resume;