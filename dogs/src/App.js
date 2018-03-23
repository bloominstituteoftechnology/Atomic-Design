import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import { Breeds, SubBreeds, SubBreed } from './pages';
import { Button, Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    document.body.style.background = "gray";
    return (
      <Container className="App my-5">
          <Route exact path="/" component={Breeds} />
          <Route exact path="/subbreeds/:breed" component={SubBreeds} />
          <Route exact path="/subbreeds/:breed/:subbreed" component={SubBreed} />

          <Row className="mt-3">
              <Col sm={6} className=" mt-1">
                  <Link exact to="/" className='m-0 p-0 navButtons'>
                      <Button className="navButtons">Home</Button>
                  </Link>
              </Col>

              <Col sm={6} className="mt-1">
                  <Button className="m-0 navButtons "
                   onClick={this.props.history.goBack}
                   >
                   Back 
                  </Button>
              </Col>
          </Row>
      </Container>
    );
  }
}
export default App;
