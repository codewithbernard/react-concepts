import React, { Component } from "react";
import ListItem from "./ListItem";
import { listItemValues } from "../data";

class List extends Component {
  renderItems = () => {
    return listItemValues.map(item => {
      return <ListItem key={item} title={item} />;
    });
  };

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default List;
