import React, { Component } from "react";
import ListItem from "./ListItem";
import { listItemValues } from "../data";

class List extends Component {
  // Initialize state. We are kkeping track of items and inputValue.
  state = {
    inputValue: "",
    items: listItemValues
  };

  // Go over items and for each item from the array return ListItem component. Each ListItem will have onDelete props.
  // onDelete is going to be function which will execute removeItem function with item title as the argument
  renderItems = () => {
    return this.state.items.map(item => {
      return (
        <ListItem
          key={item}
          onDelete={() => this.removeItem(item)}
          title={item}
        />
      );
    });
  };

  // Remove item from items. To remove item from array filter helper is used. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // This function is called when delete button is clicked
  removeItem = itemToRemove => {
    // This will return new array without the removed item
    const newItems = this.state.items.filter(item => {
      return item !== itemToRemove;
    });
    // Shorthand
    // const newItems = this.state.items.filter(item => item !== itemToRemove);

    // Now set items state to the newItems
    this.setState({ items: newItems });
  };

  // Adds new item to the state. This function is called when submit button is clicked
  addItem = event => {
    // Call preventdefault to prevent default behavior of HTML form
    event.preventDefault();
    if (this.state.inputValue) {
      const newItems = [...this.state.items, this.state.inputValue];
      this.setState({ items: newItems, inputValue: "" });
    }
  };

  // Change inputValue in the state
  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        {this.renderItems()}
      </div>
    );
  }
}

export default List;
