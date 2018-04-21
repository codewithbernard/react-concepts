import React, { Component } from "react";
import ListItem from "./ListItem";
import { listItemValues } from "../data";
import { Button } from "react-bootstrap";

// https://reactjs.org/docs/react-component.html#the-component-lifecycle
class List extends Component {
  // Initialize state. We are kkeping track of items and inputValue.
  // Called one time only. Executed first
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: listItemValues,
      message: ""
    };
    console.log("Calling constructor");
  }

  // Called once only. After constructor
  componentWillMount() {
    console.log("Calling component will mount");
  }

  // Called once only. After render
  componentDidMount() {
    console.log("Calling component did mount");
  }

  // Called each times state changes. Before state is actually changed
  componentWillUpdate(nextProps, nextState) {
    console.log("Calling component will update");
    if (this.state.items.length < nextState.items.length) {
      this.setState({ message: "New item was added" });

      // Not inline way
      // const myFunction = () => {
      //   this.setState({ message: "" });
      // };
      // setTimeout(myFunction, 1000);

      // Inline way of passing function
      setTimeout(() => this.setState({ message: "" }), 1000);
    }

    if (nextState.items.length < this.state.items.length) {
      this.setState({ message: "Item was removed" });
      setTimeout(() => this.setState({ message: "" }), 1000);
    }
  }

  // Called each times state changes. After state is actually changed
  componentDidUpdate(prevProps, prevState) {
    console.log("Calling component did update");
  }

  // Determines if the component should be rerendered
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Calling component should update");
    return true;
  }

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

  // Called multiple times. After componentWillMount
  render() {
    console.log("Calling render");
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            type="text"
          />
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
          {this.state.message ? <p>{this.state.message}</p> : null}
        </form>
        {this.renderItems()}
      </div>
    );
  }
}

export default List;
