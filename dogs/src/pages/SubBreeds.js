import React, { Component } from 'react';
import axios from 'axios';
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
      let breed = (response.data.message)
      let breedsArr = []
      breed.map(subBreed => {
        breedsArr.push({
          label: subBreed
        })
      })
      this.setState({ subBreeds: breedsArr });
    })

    .then(() => {
      this.setState({imgLabel: this.state.subBreeds[0].label })
      console.log('this.state.imgLabel', this.state.imgLabel)
      axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/${this.state.imgLabel}/images`)

      .then(response => {
        this.setState({ imgUrl:response.data.message[0] })
        console.log(this.state)
      })
    })
    .catch(err => {
      console.log('Axios request failed: ', err);
    })
  }

  render () {
    return (
    <div>
      <Options 
          title="Sub-breeds"
          subtitle={this.props.match.params.breed}
          list={this.state.subBreeds}
          imgLabel= {this.state.imgLabel}
          imgUrl= {this.state.imgUrl}
        />
    </div>
    )
  }
}



export default SubBreeds;