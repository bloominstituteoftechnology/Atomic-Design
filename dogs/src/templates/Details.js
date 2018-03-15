import React from "react";
import { Image } from "../atoms";

function Details(props) {
  return (
    <div className="Details">
      <h1>{props.title}</h1>
      <h2>{props.subtitle || ""}</h2>
      <Image label={props.imgLabel} url={props.imgUrl} />{" "}
    </div>
  );
}

export default Details;
