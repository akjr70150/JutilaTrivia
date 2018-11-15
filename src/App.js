import React, { Component } from 'react';
import jutila from './jutila.png';
import './App.css';
import Navigointi from "./components/Navigointi";
import Etusivu from "./components/Etusivu"
import Kysymykset from "./components/Kysymykset";

class App extends Component {
  render() {
    return (
      <div className="Juti">
        <header className="App-header">
          <img src={jutila} className="App-logo" alt="logo" />
<div className="testi">
        <Navigointi/>
</div>
        </header>
      </div>
    );
  }
}

export default App;
