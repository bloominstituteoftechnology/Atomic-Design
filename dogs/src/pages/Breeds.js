import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }
  fetchBreeds = this.fetchBreeds.bind(this);
  fetchDogImg = this.fetchDogImg.bind(this);


  fetchBreeds(){
    // const breeds = this.state.breeds;
    axios.get("https://dog.ceo/api/breeds/list")
    .then(response => response.data.message)
    .then(breeds => this.filterBreeds(breeds))
    .then(filteredBreeds =>{
      this.setState({
        breeds: filteredBreeds.map(breed => {
          return {label: breed,
          path: `subbreeds/${breed}`,
          imgLabel: breed[0]}
        })
      });
      // console.log(filteredBreeds);
      console.log("breed", filteredBreeds)
      // return filteredBreeds
      this.fetchDogImg()
      
    } )
    // .then(() => console.log(this.state.breeds))

    // .then(() => console.log(this.state))

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


  fetchDogImg(dogs) {
    console.log("fetch", this.state.breeds)
    const dogPic = `https://dog.ceo/api/breed/${this.state.breeds[0].label}/images`;
    axios.get(dogPic)
    .then(response =>{
    console.log("fetchres", response)
        this.setState({
        imgUrl: response.data.message[0]
      });
      return dogs;
    })
    // .then(response => {

    // });
  }

componentDidMount(){
  this.fetchBreeds()
 
}

  render(){
    return(
    <div> 
       <h2>Breeds</h2> 
      <Options list={this.state.breeds} imgLabel={this.state.breeds.imgLabel} imgUrl={this.state.imgUrl}/>
      
    </div>
    )
  }
}

export default Breeds;