import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import {
  Breeds,
  SubBreeds,
  Deets,
} from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Breeds} />
        <Route exact path='/subbreeds/:breed' component={SubBreeds} />
        <Route path='/subbreeds/:breed/:subbreed' component={Deets} />
      </div>
    );
  }
}

export default App;
