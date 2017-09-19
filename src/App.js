import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PondryHills.com</h2>
        </div>
        <p className="App-intro">
          You're probably here for the <a href="/Eggs">Eggs</a>.
        </p>
      </div>
    );
  }
}

export default App;
