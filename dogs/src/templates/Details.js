import React from 'react';
import { Image } from '../atoms';
import './Details.css';

function Details (props) {

  return (
    <div className="Details">
      <h1>{props.title}</h1>
      <h2>{props.subtitle || ""}</h2>
      <Image label={props.imgLabel} url={props.imgUrl}/>
      <button onClick={props.newimg}>MORE DOGS MORE MORE</button>
    </div>
  );
}

export default Details;