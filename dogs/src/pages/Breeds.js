import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: '',
    imgUrl: ''
  };

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
    //populate state.breeds
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        for (let breed in response.data.message) {
          this.state.breeds.push(breed);
        }
        this.setState({ breeds: this.filterBreeds(this.state.breeds) });
        for (let i = 0; i < this.state.breeds.length; i++) {
          this.state.breeds[i] = {
            label: this.state.breeds[i],
            path: `https://dog.ceo/api/breed/${this.state.breeds[i]}/images`
          };
        }
        console.log(this.state.breeds);
      })
      .then(
        axios
          .get(`https://dog.ceo/api/breed/hound/images/random`)
          .then(response => {
            console.log(response);
            this.setState({
              imgUrl: response.data.message,
              imgLabel: 'Hound'
            });
          })
      )
      .catch(error => console.log(error));
    //populate imgLabel, imgUrl:
    //  this.setState({
    //    imgUrl: response.data.message,
    //    imgLabel: this.state.breeds[0]
    //  });
  } //end ComponentDidMount

  render() {
    return (
      <div>
        <Options
          title="Breeds"
          list={this.state.breeds}
          imgUrl={this.state.imgUrl}
          imgLabel={this.state.imgLabel}
        />
      </div>
    );
  }
}

export default Breeds;
