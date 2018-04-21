import "./ListItem.css";
import React, { Component } from "react";

class ListItem extends Component {
  // Called one time only. Executed first
  constructor(props) {
    super(props);
    this.state = {
      fillBackground: false
    };
  }

  toggleFillBackgorund = () => {
    this.setState({
      fillBackground: !this.state.fillBackground
    });
  };

  render() {
    const { fillBackground } = this.state;
    return (
      <div className={fillBackground ? "fillBackground" : ""}>
        <p onClick={this.toggleFillBackgorund}> {this.props.title} </p>{" "}
        <button onClick={this.props.onDelete}> Delete </button>{" "}
      </div>
    );
  }
}

export default ListItem;
