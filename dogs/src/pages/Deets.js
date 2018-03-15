import React, { Component } from 'react';
import axios from 'axios';
import { Details } from '../templates';
import { Link } from 'react-router-dom';

class Deets extends Component {
  state = {
    imgLabel: "",
    imgUrl: ""
  }

  newimage = () => {
    axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/${this.props.match.params.subbreed}/images/random`)
    .then(response => {
      this.setState( { imgUrl: response.data.message });
    })
    .catch(error => console.log(`You dun goofed: ${error}`))
  };

  render() {
    return(
      <div>
        <Details title={`${this.props.match.params.subbreed} ${this.props.match.params.breed}`} imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} newimg={this.newimage} />
        <br></br>
        <Link to="/">Return Home</Link>
      </div>
    )
  };

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/${this.props.match.params.subbreed}/images/random`)
    .then(response => {
      this.setState( { imgUrl: response.data.message });
    })
    .catch(error => console.log(`You dun goofed: ${error}`))
  }
}

export default Deets;