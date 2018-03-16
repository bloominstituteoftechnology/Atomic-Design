import React from "react";
import { Image } from "../atoms";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

function Details(props) {
  return (
    <Card className="Details">
      <CardBody>
        <CardTitle className="text-capitalize d-flex justify-content-center">
          {props.title}
        </CardTitle>
        <CardSubtitle className="text-capitalize d-flex justify-content-center mb-3">
          {props.subtitle || ""}
        </CardSubtitle>
        <Image
          className="img-fluid"
          label={props.imgLabel}
          url={props.imgUrl}
        />
      </CardBody>
    </Card>
  );
}

export default Details;
