import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
