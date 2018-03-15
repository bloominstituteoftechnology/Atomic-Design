import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class SubBreeds extends Component {
  state = {
    subBreeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getSubBreeds = this.getSubBreeds.bind(this);

  //componentDidMount to get the first image of SubBreed when rendered
  componentDidMount() {
    this.getSubBreeds()
      .then(this.getFirstImg);
  }

  //Axios promises
  getSubBreeds() {
    return new Promise((resolve, reject) => {
      axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/list`)
        .then(response => {
        return response.data.message
        })
        .then(subBreeds => {
          return subBreeds.map(breed => {
            return { //setting a label
              label: breed
            }
          });

        })
        .then(subBreeds => {
          this.setState({//returns the list
            subBreeds
          });
          resolve(subBreeds);
        });
    });
  } 
  //Render, I want to have my sub breeds displayed along with the first image coming from Options
  render() {
    return <Options title="Sub-breeds" subtitle={this.props.match.params.breed} list={this.state.subBreeds} imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} />
   }
}

export default SubBreeds;