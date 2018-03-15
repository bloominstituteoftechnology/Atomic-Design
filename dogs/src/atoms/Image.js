import React from "react";
import { CardImg, Card, CardTitle, CardBody } from "reactstrap";

function Image(props) {
  return (
    <Card className="Image">
      <CardBody>
        <CardTitle>{props.label || ""}</CardTitle>
      </CardBody>{" "}
      <CardImg className="img-fluid rounded" src={props.url} />
    </Card>
  );
}

export default Image;
