import React, { Component } from "react";

import "./App.css";
import { MyContextProvider } from './ContextFile'
import ChildA from "./ChildA";
import ChildB from "./ChildB";

class App extends Component {
  render() {
    return (
      <MyContextProvider>
        <ChildA />
        <ChildB />
      </MyContextProvider>
    );
  }
}

export default App;
