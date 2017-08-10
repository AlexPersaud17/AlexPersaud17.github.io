import React, { Component } from 'react';
import Logo from './images/logo.png'

class NavBar extends Component {
  render(){
    return(
      <div id='nav-bar'>
        
        <header>
          <div>
            <a href="#landing"><img id='nav-logo' src={Logo}/></a>
          </div>
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