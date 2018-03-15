import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getBreeds = this.getBreeds.bind(this);
  
  //componentDidMount to get the first img of Breed when rendered 
  componentDidMount() {
    this.getBreeds()
      .then(this.getFirstImg);
  }

  //Axios promises
  getBreeds() {
    return new Promise((resolve, reject) => {
      axios.get("https://dog.ceo/api/breeds/list")
        .then(response => response.data.message)
        .then(this.filterBreeds)
        .then(breeds => {
          return breeds.map(breed => {
            return { //setting a label and link to subbreeds
              label: breed,
              path: `/subbreeds/${breed}`
            }
          });

        })
        .then(breeds => {
          this.setState({ //returns the array of elements
            breeds
          });
          resolve(breeds);
        });
    });
  }
//Actual breeds being filtered out
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
  //Render, I want to have breeds displayed along with the first image coming from Options
  render() {
   return <Options title="Breeds" list={this.state.breeds} imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} />
  }
}

export default Breeds;