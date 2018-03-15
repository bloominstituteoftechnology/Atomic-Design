import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

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

  render () {
    console.log(this.state.breeds)
    return (
    <div>
      <Options 
          title="Breeds"
          list={this.state.breeds}
          imgLabel= {this.state.imgLabel}
          imgUrl= {this.state.imgUrl}
        />
    </div>
    )
  }

  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/list")
    .then(response => {
      let breed = this.filterBreeds(response.data.message)
      let newArray = []
      breed.map(dog => {
        newArray.push({
          label: dog,
          path: `/subbreeds/${dog}`
        })
      })
      this.setState({ breeds: newArray });
      
    })
    .then(() => {
      this.setState({imgLabel: this.state.breeds[0].label })
      console.log(this.state.imgLabel)
      axios.get(`https://dog.ceo/api/breed/${this.state.imgLabel}/images`)
      .then(response => {
        this.setState({ imgUrl:response.data.message[0] })
        console.log(this.state)
      })
    })
    .catch(err => {
      console.log('Axios request failed: ', err);
    })
  }
}

export default Breeds;