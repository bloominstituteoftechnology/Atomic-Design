import React from 'react';

function Image(props) {
  return (
    <div className="Image">
      <h2>{props.label || ""}</h2>
      <img src={props.url} alt="dog image" />
    </div>
  );
}

export default Image;