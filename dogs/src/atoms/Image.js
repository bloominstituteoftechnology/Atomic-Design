import React from 'react';
import { CardImg, Card, CardTitle } from 'reactstrap';

function Image(props) {
  return (
    <Card className="Image">
          <CardTitle className="text-capitalize">{props.label || ""}</CardTitle>
        <CardImg className="img-fluid rounded" src={props.url} />
    </Card>
  );
}

export default Image;