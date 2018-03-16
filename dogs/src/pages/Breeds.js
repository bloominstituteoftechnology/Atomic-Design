import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  getBreeds =  this.getBreeds.bind(this);

  getBreeds() {
    axios.get('https://dog.ceo/api/breeds/list')
    .then( res => {
      this.setState({ breeds: this.filterBreeds(res.data.message) });
      this.setState({ imgLabel: this.state.breeds[0] });
      console.log(this.state)
      console.log(res);
      this.getImgUrl();
    })
    .catch(error => {
      console.error(error);
    })
  }

  getImgUrl() {
    console.log('get img: ', this.state.imgLabel)
    axios.get(`https://dog.ceo/api/breed/${this.state.breeds[0]}/images`)
      .then(res => {
        console.log('res.data.message  ', res.data.message[0]);
        this.setState({ imgUrl: res.data.message[0] })
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
// this.state.breeds  = [ "breed1",  "breed2"]

// [{label: 'breed1', path: '/subbreeds/breed1'}, {label:'breed2'}]

  render() {
    console.log(breedObjArray);
    const breedObjArray = this.state.breeds.map( breed => {
      let obj = {};
      obj.label = breed;
      obj.path = `/subbreeds/${breed}`
      return obj;
    })

    return (
      <div>
        <Options list={breedObjArray} title='Breeds' imgLabel={this.state.imgLabel} imgUrl={this.state.imgUrl} />
      </div>
    )
  }
}

export default Breeds;