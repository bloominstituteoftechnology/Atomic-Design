import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  componentDidMount(){
    axios.get('https://dog.ceo/api/breeds/list').then( (res)=>{
      res.data.message.forEach( (e,i)=>{
        if(i === 0){
          axios.get('https://dog.ceo/api/breed/'+e+'/images').then( (res)=>{
            this.setState({imgUrl:res.data.message[0]});
            console.log(res);

          }).catch( (err)=>{
            console.log(err);
          });
        }
        let breeds = this.state.breeds.slice();
        breeds.push(e); 
        this.setState({breeds:breeds});
      });
    }).catch( (err)=>{
      console.log(err);
    });
  }

  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }
    return (choiceBreeds[breeds] !== undefined);


  }
  render() {
    return (
    <div>
      <div>
      <img src={this.state.imgUrl}/>
      </div>
      <div>
    { this.state.breeds.map( (e,i)=>{
      if(this.filterBreeds(e)){
        return <div key={i}> {e} </div>
      }
    })
    }
      </div>
    </div>

    );
  }
}

export default Breeds;
