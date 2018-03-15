import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: '',
    imgUrl: ''
  };

  componentDidMount() {
    console.log(this.props.match.params.breed);
    axios
      .get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
      .then(response => {
        this.setState({
          subBreeds: response.data.message,
          imgLabel: response.data.message[0]
        });
        for (let i = 0; i < this.state.subBreeds.length; i++) {
          this.state.subBreeds[i] = {
            label: this.state.subBreeds[i]
          };
        }
        console.log(response.data.message[0]);
        axios
          .get(`https://dog.ceo/api/breed/hound/afghan/images/random`)
          .then(response => {
            this.setState({
              imgUrl: response.data.message
            });
          });
      });
  }
  render() {
    return (
      <Options
        title="Sub Breeds"
        list={this.state.subBreeds}
        imgUrl={this.state.imgUrl}
        imgLabel={this.state.imgLabel}
      />
    );
  }
}

export default SubBreeds;
