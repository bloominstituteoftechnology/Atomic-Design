import React from 'react';
import { SplitThirds } from '../organisms';
import { List } from '../molecules';
import { Image } from '../atoms';

// This template imports everything needed to display a list of labeled links, labeled images, and the general outlook

// component takes the passed props as a parameter. Two variables, leftComponent and rightComponent, are initialized. The leftComponent has the List component assigned to it which has the props array passed to it when called..

// The rightComponent has the Image component assigned to it which has the props label and url passed to it.
function Options(props) {

  const leftComponent = ( <List list={props.list} /> );
  const rightComponent = ( <Image label={props.imgLabel} url={props.imgUrl}/> );

// component returns a div. This div displays 3 tags. The first two tages take title and subtitle from props. The bottom most tag will call the SplitThirds component
  return (
    <div className="Options">
      <h1>{props.title}</h1>
      <h2>{props.subtitle || ""}</h2>
      <SplitThirds left={leftComponent} right={rightComponent} />
    </div>
  );
}

export default Options;