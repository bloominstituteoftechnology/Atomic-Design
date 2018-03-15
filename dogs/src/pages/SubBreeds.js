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
  return(
    <div>
      <Options title="SubBreeds" imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} subtitle={this.props.match.params.breed} list={this.state.subBreeds.map(breed => { return {label: breed, path: `/subbreeds/${this.props.match.params.breed}/${breed}`}})} />
      <Link to="/">Return Home</Link>
    </div>
  )
};

componentDidMount() {
  axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
  .then(response => {
    this.setState( { subBreeds: response.data.message });
    this.setState({imgLabel: this.state.subBreeds[0]})
      axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/${this.state.subBreeds[0]}/images/random`)
      .then(response => this.setState({imgUrl: response.data.message}))
      .catch(error => console.log(`You dun goofed: ${error}`))
  })
  .catch(error => console.log(`You dun goofed: ${error}`))
}
}

export default SubBreeds;