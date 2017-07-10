import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Landing from './Landing.js';
import AboutMe from './AboutMe.js';
import Resume from './Resume.js';
import ContactMe from './ContactMe.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Landing />
        <AboutMe />
        <Resume />
        <ContactMe />
      </div>
    );
  }
}

export default App;
