import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: "",
    imgUrl: ""
  };
  render() {
    return (
      <Options
      title="Sub-Breeds"
      subtitle={this.props.match.params.breed}
      list={this.state.subBreeds}
      imgLabel={this.state.imgLabel}
      imgUrl={this.state.imgUrl}
      />
    );
  }
  componentDidMount() {
    axios
        .get('https://dob.ceo/api/breed/${this.props.match.params.breed}/list')
        .then(response => {
          this.setState({
            subBreeds: response.data.message.map(breed => {
              return {
                path: '${this.props.match.params.breed}/${breed}',
                label: breed
              };
            })
          });
          axios
          .get(
            'https://dob.ceo/api/breed/${this.props.match.params.breed}/${this.state.subBreeds[0].label}/images/random'
          )
          .then(response => {
            this.setState({
              imgLabel: this.state.subBreeds[0].label,
              imgUrl: response.data.message
            });
          });
        });
  }
}

export default SubBreeds;