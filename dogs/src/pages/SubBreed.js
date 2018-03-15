import React, { Component } from "react";
import axios from "axios";
import { Details } from "../templates";

class SubBreed extends Component {
  constructor() {
    super();

    this.state = {
      subBreed: "",
      imgLabel: "",
      imgUrl: ""
    };
    this.getPicture = this.getPicture.bind(this);
  }
  render() {
    return (
      <div>
        <Details
          title="Sub-breed"
          subtitle={this.props.match.params.breed}
          imgLabel={this.state.imgLabel}
          imgUrl={this.state.imgUrl}
        />
        <button onClick={this.getPicture}>Get A New Picture</button>
      </div>
    );
  }
  getPicture() {
    axios
      .get(
        `https://dog.ceo/api/breed/${this.props.match.params.breed}/${
          this.props.match.params.subbreed
        }/images/random`
      )
      .then(response => {
        this.setState({
          imgLabel: this.props.match.params.subbreed,
          imgUrl: response.data.message
        });
      });
  }
  componentDidMount() {
    this.getPicture();
  }
}

export default SubBreed;
