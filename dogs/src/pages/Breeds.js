import React, { Component } from 'react';
import axios from 'axios';
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

  render() {
    return(
      <div>
       <Options title="Breeds" list={this.state.breeds.map(breed => { return {label: breed, path: `/subbreeds/${breed}`}})} />
      </div>
    )
  };

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list')
    .then(response => {
      this.setState( { breeds: this.filterBreeds(response.data.message) });
    })
    .catch(error => console.log(`You dun goofed: ${error}`))
  }
}

export default Breeds;