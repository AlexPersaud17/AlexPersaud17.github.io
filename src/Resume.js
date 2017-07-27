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

  handleMouseOver(e) {
    switch(e.target.id){
      case 'port-pic-1':
        this.setState({imgSrc1: "http://i.imgur.com/jjMDpDT.gif"})
        break;
      case 'port-pic-2':
        this.setState({imgSrc2: "http://i.imgur.com/B4idh6z.gif"})
        break;
      case 'port-pic-3':
        this.setState({imgSrc3: "http://i.imgur.com/nk2RtWQ.gif"})
        break;
      case 'port-pic-4':
        this.setState({imgSrc4: "http://i.imgur.com/RrgRfHA.gif"})
        break;
    }
  }

  handleMouseOut(e) {
    switch(e.target.id){
      case 'port-pic-1':
        this.setState({imgSrc1: "http://i.imgur.com/0qy2xFL.jpg"})
        break;
      case 'port-pic-2':
        this.setState({imgSrc2: "http://i.imgur.com/2jRpeek.jpg"})
        break;
      case 'port-pic-3':
        this.setState({imgSrc3: "http://i.imgur.com/CMfNGUC.jpg"})
        break;
      case 'port-pic-4':
        this.setState({imgSrc4: "http://i.imgur.com/2EdMdJk.jpg"})
        break;
    }
  }

  render(){
    return(
      <div>
        <div className="section-container" id="resume-text">
          <h1 className="section-text">My Portfolio</h1>
        </div>
        <div id="resume">

          <a href="https://poppn.herokuapp.com/"><div className="project">
            <h1>Popp'n</h1>
            <img id='port-pic-1' className="project-gif" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc1} alt="" />
          </div></a>

          <a href="https://pickyourpoison.herokuapp.com/"><div className="project">
            <h1>PickYourPoison</h1>
            <img id='port-pic-2' className="project-gif" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc2} alt="" />
          </div></a>

          <a href="https://github.com/AlexPersaud17/Laboratory-Retrievers"><div className="project">
            <h1>LaboratoryRetrievers</h1>
            <img id='port-pic-3' className="project-gif" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc3} alt=""/>
          </div></a>

          <a href="https://www.facebook.com/Foooji-322635284834012/"><div className="project">
            <h1>Fooji</h1>
            <img id='port-pic-4' className="project-gif" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}  src={this.state.imgSrc4} alt=""/>
          </div></a>

        </div>
      </div>
    )  
  }
}

export default Resume;