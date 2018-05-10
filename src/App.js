
import React, { Component } from 'react';
import './App.css';
import ReactDom from "react-dom"
var Lorem = require('react-lorem-component');

class App extends Component {
  render() {
    return (
      <div className="App">

          <h1>Lorem Ipsum Component</h1>
          <Lorem />
      </div>

    );
  }
}

export default App;
