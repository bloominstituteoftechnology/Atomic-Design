import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = { 
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  };

  filterBreeds(breeds) {
    const choiceBreeds = {
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter",
      hound: "hound"
    };

    return breeds.filter(breed => choiceBreeds[breed])
  }
  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
      console.log("Get Breed List: ", response);
      this.setState({
        breeds: this.filterBreeds(Object.keys(response.data.message)).map(
          breed => {
            return { path: 'subbreeds/${breed}', label: breed};
          }
        )
      });
      axios.get(
        'https://dog.ceo/api/breed/${this.state.breeds[0].label}/images/random'
      )
      .then(response => {
        console.log("Getting Image: ", response);
        this.setState({
          imgLabel: this.state.breeds[0].label,
          imgUrl: response.data.message 
        });
      });
    });
  }

  render() {
    return (
      <Options
      title="Breeds"
      list={this.state.breeds}
      imgLabel={this.state.imgLabel}
      imgUrl={this.state.imgUrl}
      />
    );
  }
}

export default Breeds;