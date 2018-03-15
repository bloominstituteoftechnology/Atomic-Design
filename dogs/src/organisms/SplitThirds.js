import React from 'react';
import './SplitThirds.css';

// This organism does not import anything special..

// component that takes in a props and returns a div. In this div, two divs are displaying two different properties from props, left and right respectively
function SplitThirds(props) {
  return (
    <div className="SplitThirds">
      <div className="SplitThirds__left">{props.left}</div>
      <div className="SplitThirds__right">{props.right}</div>
    </div>
  );
}

export default SplitThirds;