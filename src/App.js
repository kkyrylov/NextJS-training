import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Span from "./components/Span/Span";

import "./index.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Span text={'This is a span'} />
      </div>
    );
  }
};

export default hot(module)(App);
