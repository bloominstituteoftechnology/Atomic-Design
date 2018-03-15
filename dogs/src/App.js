import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import { Breeds, SubBreeds, SubBreed } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Breeds} />
        <Route exact path="/subbreeds/:breed" component={SubBreeds} />
        <Route path="/subbreeds/:breed/:subbreed" component={SubBreed} />
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}

export default App;
