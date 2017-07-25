import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <div id='nav-bar'>
        <header>
          <nav>
            <a className="tabs" href="#contact-text">Contact Me!</a>
            <a className="tabs" href="#resume-text">Résumé</a>
            <a className="tabs" href="#about-text">About</a>
          </nav>
        </header>
      </div>
    )
  }
}

export default NavBar;