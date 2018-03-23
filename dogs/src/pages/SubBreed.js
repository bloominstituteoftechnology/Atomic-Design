import React, {Component } from 'react';
import axios from 'axios';
import { Details } from '../templates';

class SubBreed extends Component {
    constructor() {
        super();
        this.state ={
            subBreed: "",
            imgLabel: "",
            imgUrl: ""
        };
        this.getPicture = this.getPicture.bind{this};
    }
    render() {
        return (
            <div>
                <Details
                title="SubBreed"
                subtitle={this.props.match.params.breed}
                imgLabel={this.state.imgLabel}
                imgUrl={this.state.imgUrl}
                />
                <Row className="d-flex justify-content-center">
                    <Button className="mt-3 navButtons" onClick={this.getPicture}>
                    Get A New getPicture
                    </Button>
                </Row>
            </div>
        );
    }
    getPicture() {
        axios.get(
            'https://dog.ceo/api/breed/${this.props.match.params.breed}/${this.prop.match.params.subbreed}/images/random'
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