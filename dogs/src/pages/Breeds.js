import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: '',
    imgUrl: ''
  };

  getBreeds = this.getBreeds.bind(this);

  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: 'hound',
      retriever: 'retriever',
      terrier: 'terrier',
      poodle: 'poodle',
      setter: 'setter'
    };

    return breeds.filter(breed => choiceBreeds[breed]);
  }

  componentDidMount() {
    this.getBreeds();
  }

  getBreeds() {
    axios
      .get('https://dog.ceo/api/breeds/list')
      .then(response => response.data.message)
      .then(breeds => this.filterBreeds(breeds))
      .then(filterBreeds => {
        this.setState({
          breeds: filterBreeds
        });
        return filterBreeds;
      });
    // .then(getFirstImg);
  }
  // getFirstImg(dogs)
  // axios.get(`https://dog.ceo/api/breeds/${}`)

  render() {
    return (
      <div>
        <Options
          title="Breeds"
          list={this.state.breeds}
          imgUrl={this.state.imgUrl}
          imglabel={this.state.imgLabel}
        />
      </div>
    );
  }
}

export default Breeds;
