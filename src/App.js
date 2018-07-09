import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Knowledge } from './Components/Knowledge';
import { Projects } from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <About />
          <Knowledge />
          <Projects />
      </div>
    );
  }
}

export default App;
