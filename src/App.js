import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>There's nothing here yet. You're probably looking for the <Link to="/Eggs">Eggs</Link>. :)</div>
    );
  }
}

export default App;
