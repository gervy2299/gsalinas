import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const developer = '<gsalinas/>';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
	  <h2>Gervy Salinas {developer} 2022 </h2>
        </div>
        <p className="App-intro">
	  This project is my personal development, where i show my skills in different fields of
	  programming, development and design.
        </p>
      </div>
    );
  }
}

export default App;
