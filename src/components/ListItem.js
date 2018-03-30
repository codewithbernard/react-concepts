import "./ListItem.css";
import React, { Component } from "react";

class ListItem extends Component {
  state = {
    fillBackground: false
  };

  toggleFillBackgorund = () => {
    this.setState({ fillBackground: !this.state.fillBackground });
  };

  render() {
    const { fillBackground } = this.state;
    return (
      <div
        className={fillBackground ? "fillBackground" : ""}
        onClick={this.toggleFillBackgorund}
      >
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default ListItem;
