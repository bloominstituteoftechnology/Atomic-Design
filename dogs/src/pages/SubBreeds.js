import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';
import { Link } from 'react-router-dom';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: "",
    imgUrl: ""
  }

render() {
  console.log(this.state.subBreeds)
  return(
    <div>
      <Options title={`${this.props.match.params.breed} SubBreeds`} list={this.state.subBreeds.map(breed => { return {label: breed, path: `/subbreeds/${breed}`}})} />
      <Link to="/">Return Home</Link>
    </div>
  )
};

componentDidMount() {
  axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
  .then(response => {
    this.setState( { subBreeds: response.data.message });
  })
  .catch(error => console.log(`You dun goofed: ${error}`))
}
}

export default SubBreeds;