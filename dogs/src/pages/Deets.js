import React, { Component } from 'react';
import axios from 'axios';
import { Details } from '../templates';
import { Link } from 'react-router-dom';

class Deets extends Component {
  state = {
    subBreeds: [],
    imgLabel: "",
    imgUrl: ""
  }

render() {
  return(
    <div>
      <Link to="/">Return Home</Link>
    </div>
  )
};

/*componentDidMount() {
  axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
  .then(response => {
    this.setState( { subBreeds: response.data.message });
  })
  .catch(error => console.log(`You dun goofed: ${error}`))
}*/
}

export default Deets;