import React from "react";
import { SplitThirds } from "../organisms";
import { List } from "../molecules";
import { Image } from "../atoms";

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Options(props) {
  const leftComponent = <List list={props.list} />;
  const rightComponent = <Image label={props.imgLabel} url={props.imgUrl} />;

  return (
    <Card className="Options">
      <CardBody>
        <CardTitle className="d-flex justify-content-center mb-3 text-capitalize">
          {props.title}
        </CardTitle>
        <CardSubtitle className="d-flex justify-content-center text-capitalize">
          {props.subtitle || ""}
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <SplitThirds left={leftComponent} right={rightComponent} />
      </CardBody>
    </Card>
  );
}

export default Options;
