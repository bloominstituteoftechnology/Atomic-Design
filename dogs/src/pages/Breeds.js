import React, { Component } from 'react';
import axios from 'axios';

import { Link } from '../atoms';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }

    return breeds.filter(breed => choiceBreeds[breed]);
  }

  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/list/all").then(response => {this.setState({
          breeds: this.filterBreeds(Object.keys(response.data.message)).map(
            breed => {return { path: `subbreeds/${breed}`, label: breed };})});});
  }

  render() {
    return (
      <div>
        <p>Hello from Breeds.js render</p>
        <Options
        title="Breeds"
        list={this.state.breeds}
        imgLabel={this.state.imgLabel}
        imgUrl={this.state.imgUrl}
        />
      </div>
    );
  }
}

export default Breeds;