import React from 'react';
import { Link } from 'react-router-dom';
import './Link.css';

// this atom does not import anything special..

// Component that takes in a props and returns a div. This div contains a Link tag with path and label properties from the props being used.
function StyledLink(props) {
  return(
    <div className="Link">
      <Link to={props.path}>{props.label}</Link>
    </div>
  );
}

export default StyledLink;