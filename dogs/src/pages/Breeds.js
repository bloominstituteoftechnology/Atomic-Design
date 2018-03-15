import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getBreeds() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then( res => {
      console.log('get response: ', res);
      console.log('get.data response: ', res.data);
      this.setState({ breeds: res.data });
    });
  }

  componentDidMount() {
    this.getBreeds();
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
    return (
      <div>
      </div>
    )
  }
}

export default Breeds;