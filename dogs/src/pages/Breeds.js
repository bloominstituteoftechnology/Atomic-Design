import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }
  getBreeds = this.getBreeds.bind(this);


componentDidMount() {
  this.getBreeds;
}

  getBreeds() {
    axios.get('https://dog.ceo/api/breeds/list').then(response => {
        
        this.setState({ breeds: response.data.message});
      })
        .then(breeds => this.filterBreeds(breeds))
        .then(filteredBreeds => {
            this.setState({
            breeds: this.filterBreeds
          })
        })
        .then(()=> console.log(this.state)) 
        .catch(error => {
          console.log(`There was an error getting dogs:  ${error}`);
        });
        
  }
  
getFirstImg(dogs) {
  const firstDog = dogs[0]
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
    render(){
      return (
        <div>
          <h1>Breeds</h1>
          {/* {this.state.breeds} */}
          {/* <Options label={this.state.breeds} list={this.state.breeds} imgLabel={} imgUrl /> */}
            {/* {console.log(this.state.breeds)}   */}
        </div>
      )
    }
}

export default Breeds;