import React from 'react';
import {
  Link,
  Label
} from '../atoms';

// This molecule uses the Link and Label atoms

// Component that takes in a passed props. each element from the props list array is assigned to a new array items. Each of these list elements..

// has itemComponent as path which is passed onto the Link atom. Link also takes the element label as a label and key.

// The Label atom takes only takes the label from each element to display.

function List(props) {
  const items = props.list.map(item => {
    const itemComponent = item.path ?
      <Link path={item.path} label={item.label} key={item.label} /> :
      <Label label={item.label} key={item.label} />;
    return itemComponent;
  });
    
  // The array of items from the function List is now wrapped in a new div called List and displayed. items at this point is just one giant collection of linked labels displaying their specific element from this components props list array.
  return (
    <div className="List">
      {items}
    </div>
  );
}

export default List;