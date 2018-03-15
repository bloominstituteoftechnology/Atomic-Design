import React from 'react';

// this atom does not import anything special..

// Component that takes in its props and returns a div. Inside this div I have some html elements that display the props label and the props url.

// The props is the breed or subbreed?
function Image(props) {
  return (
    <div className="Image">
      <h2>{props.label || ""}</h2>
      <img src={props.url}/>
    </div>
  );
}

export default Image;