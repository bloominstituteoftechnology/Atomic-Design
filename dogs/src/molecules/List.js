import React from "react";
import { Link, Label } from "../atoms";
import { ListGroup } from "reactstrap";

function List(props) {
  console.log("List Props: ", props);
  const items = props.list.map(item => {
    const itemComponent = item.path ? (
      <Link path={item.path} label={item.label} key={item.label} />
    ) : (
      <Label label={item.label} key={item.label} />
    );
    return itemComponent;
  });

  return <ListGroup className="List">{items}</ListGroup>;
}

export default List;
