import React from "react";
import "./SplitThirds.css";
import { Row, Col } from "reactstrap";

function SplitThirds(props) {
  return (
    <Row className="SplitThirds d-flex">
      <Col sm={4} className="SplitThirds__left ">
        {props.left}
      </Col>
      <Col sm={8} className="SplitThirds__right">
        {props.right}
      </Col>
    </Row>
  );
}

export default SplitThirds;
