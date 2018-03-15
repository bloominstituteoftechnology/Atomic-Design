import React, { Component } from "react";
import axios from "axios";
import { Details } from "../templates";
import { Button } from "reactstrap";
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
        <Button className="mt-3" onClick={this.getPicture}>
          Get A New Picture
        </Button>
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
          imgLabel: this.props.match.params.subbreed.toUpperCase(),
          imgUrl: response.data.message
        });
      });
  }
  componentDidMount() {
    this.getPicture();
  }
}

export default SubBreed;
