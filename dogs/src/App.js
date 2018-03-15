import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import { Breeds, SubBreeds, SubBreed } from "./pages";
import { Button, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container className="App mt-5">
        <Route exact path="/" component={Breeds} />
        <Route exact path="/subbreeds/:breed" component={SubBreeds} />
        <Route path="/subbreeds/:breed/:subbreed" component={SubBreed} />
        <Link to="/">
          <Button className="m-3">Home</Button>
        </Link>
        <Button onClick={this.props.history.goBack}>Back</Button>
      </Container>
    );
  }
}

export default App;
