import React from 'react';
import { Link } from 'react-router-dom';
import './Link.css';
import { ListGroupItem } from 'reactstrap';

function StyledLink(props) {
  return (
    <ListGroupItem className="Link">
        <Link to={props.path} className="text-capitalize">
          {props.label}
       </Link>
    </ListGroupItem>
  );
}

export default StyledLink;