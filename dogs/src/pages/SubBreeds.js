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
        console.log(response);
        this.setState({
          subBreeds: response.data.message
        });
      });
  }
  render() {
    return <div />;
  }
}

export default SubBreeds;
