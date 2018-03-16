import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: '',
    imgUrl: ''
  };

  render() {
    return;
    <div>
      <Options
        title={this.props.match.params.breed}
        list={this.state.subBreeds}
        imgLabel={this.state.imgLabel}
        imgUrl={this.state.imgUrl}
      />
    </div>;
  }
}

export default SubBreeds;
