import React from "react";
import { ListGroupItem } from "reactstrap";

function Label(props) {
  return (
    <ListGroupItem className="text-capitalize">{props.label}</ListGroupItem>
  );
}

export default Label;
