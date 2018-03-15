import React, { Component } from 'react';
import axios from 'axios';

import { List } from '../molecules';
import { Options } from '../templates';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
      .then(response => {
        this.setState({
          subBreeds: response.data.message.map(breed => {
            return { label: breed };
          }
        )
      });
    });
  }

  render() {
    return (
      <div>
        <p>Hello from SubBreeds.js render</p>
        <Options
          title={this.props.match.params.breed}
          list={this.state.subBreeds}
          imgLabel={this.state.imgLabel}
          imgUrl={this.state.imgUrl}
        />
      </div>
    );
  }
}

export default SubBreeds;