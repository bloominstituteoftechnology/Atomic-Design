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
      // console.log('get response: ', res);
      // console.log('get.data.message response: ', res.data.message);
      // console.log('array of keys: ', Object.keys(res.data.message));
      this.setState({ breeds: this.filterBreeds(Object.keys(res.data.message)) });
      // console.log('state: ', this.state)
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
        {/* <Options list={this.state.breeds} imgLabel='/> */}
      </div>
    )
  }
}

export default Breeds;