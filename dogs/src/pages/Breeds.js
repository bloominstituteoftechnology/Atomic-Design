import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';
import SplitThirds from '../organisms/SplitThirds.js';
import List from '../molecules/List.js';


class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  componentDidMount() {
    axios
      .get('https://dog.ceo/api/breeds/list')
      .then(response => {
        return this.filterBreeds(response.data.message)
      })
      .then(breeds => {
        return breeds.map(breed => {
          return {
            label: breed,
            path: `/subbreeds/${breed}`
          }
        });

      })
      .then(breeds => this.setState({breeds}))
      .catch(error => {
        console.error('Server Error: ', error);
      });
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
  console.log(this.state.breeds);
  return (
    <Options list={this.state.breeds}/>
    
  )  
  }

}
export default Breeds;