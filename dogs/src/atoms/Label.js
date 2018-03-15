import React from "react";
import { ListGroupItem } from "reactstrap";

function Label(props) {
  return <ListGroupItem>{props.label.charAt(0).toUpperCase()}</ListGroupItem>;
}

export default Label;
