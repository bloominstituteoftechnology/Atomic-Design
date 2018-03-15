import React from "react";
import { Link } from "react-router-dom";
import "./Link.css";
import { ListGroupItem } from "reactstrap";

function StyledLink(props) {
  return (
    <ListGroupItem className="Link">
      <Link to={props.path}>
        {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
      </Link>
    </ListGroupItem>
  );
}

export default StyledLink;
