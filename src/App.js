import React, { Component } from 'react';
import jutila from './jutila.png';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Etusivu from './components/Etusivu';
import Kysymyssivu from './components/Kysymyssivu';
import Navigaatio from './components/Navigaatio';
import SivuaEiLoytynyt from './components/SivuaEiLoytynyt';

class App extends Component {
  render() {
    return (
      <div className="Juti">
        <header className="App-header">
          <img src={jutila} className="App-logo" alt="logo" />
        <Navigaatio/>
            <Switch>
                <Route exact path='/' component={Etusivu}></Route>
                <Route exact path='/kysymykset' component={Kysymyssivu}></Route>
                <Route component={SivuaEiLoytynyt} />
            </Switch>
        </header>
      </div>
    );
  }
}

export default App;
