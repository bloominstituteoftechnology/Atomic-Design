import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

// This page imports axios for server calls. Also imports template Options.

// 
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
    return (
      <div>
        <Options title="Sub-breeds" subtitle="EDIT THIS breed name from breeds"/>
        </div>
    );
  }
}

export default Breeds;