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

  componentDidMount() {
    axios
    // library used to make HTTP requests from a server
    .get('https://dog.ceo/api/breeds/list')
    .then(response => response.data.message)
    .then(breedNames => this.filterBreeds(breedNames))
    .then(filteredBreeds => {
      return (
        filteredBreeds.map(breed => { 
         return { path: `/subbreeds/${breed}`,
          label: breed
        };
        })
      )
    })
    .then(breedArray => this.setState({breeds : breedArray}))
    .catch(error => console.error('error', error))
  }



  render () {
    // we need title, subtitle, list, imgLabel, imgUrl
    console.log(this.state);
    return <Options title="Breeds" subtitle="SubBreeds" list={this.state.breeds}/>
  }
}

export default Breeds;