import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';
import { Label }  from '../atoms/Label';

class Breeds extends Component {
  constructor() {
    super();
      this.state = {
        breeds: [],
        imgLabel: "",
        imgUrl: ""
      }
  this.filterBreeds = this.filterBreeds.bind(this)
  }
  
  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }
    return breeds.filter(breed => choiceBreeds[breed])
  }

  getBreeds() {
    axios.get('https://dog.ceo/api/breeds/list')
      .then(response => response.data.message )
      .then(breeds => this.filterBreeds(breeds))
      .then(breeds => {
        return breeds.map(breed => {
          return {
            label: breed,
            path: `/subbreeds/${breeds}`
          }
        });
      })
      .then(breeds => {
        this.setState({
          breeds
        });
      })
      .then(() => console.log(this.state.breeds))
      .catch(error => {
        console.log(`Error getting dog breeds: ${error}`);
      })
  }

  componentDidMount() {
    this.getBreeds();
}

  render() {
    // console.log(this.state.breeds)
    // this.state.filterBreeds;
    return (
      <div>
      {/* <Options/> */}
      </div>
    )
   
  }
    
}

export default Breeds;

  // async componentDidMount() {
  //   let breeds = []; 
  //   await axios.get('https://dog.ceo/api/breeds/list/all')
  //   .then(response => this.filterBreeds(response.data.message))
  //   .then(breeds => this.setState({ breeds}))
  //   .then(console.log(this.state.breeds))
  //   .catch(error => console.log(error)) //put this to stop crashing browser 
    
  // }
  
  // async componentDidMount() {
  //   await this.getBreeds()
  //     // .then(this.getFirstImg)
  //     .then(console.log("Finished"))
  //   console.log(this.state.breeds)
  // }

  // getBreeds = () => {
  //   return new Promise((resolve, reject) => {
  //     axios.get("https://dog.ceo/api/breeds/list")
  //       .then(response => response.data.message)
  //       .then(this.filterBreeds)
  //       .then(breeds => {
  //         return breeds.map(breed => {
  //           return {
  //             label: breed,
  //             path: `/subbreeds/${breed}`
  //           }
  //         });
  //       })
  //       .then(breeds => {
  //         this.setState({
  //           breeds
  //         });
  //         resolve(breeds);
  //       });
  //   });
  // }
