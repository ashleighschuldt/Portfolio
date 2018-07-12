import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Knowledge } from './Components/Knowledge';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <About />
          <Knowledge />
          <Projects />
          <Contact />
      </div>
    );
  }
}

export default App;
