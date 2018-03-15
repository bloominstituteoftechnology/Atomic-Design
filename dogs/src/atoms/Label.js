import React from 'react';

// this atom does not import anything special..

// Component that takes in a props and returns a tag that displays the props label.
function Label(props) {
  return <h3>{props.label}</h3>
}

export default Label;