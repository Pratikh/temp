import React, { Component } from "react";
import { MyContext } from "./ContextFile";

class ChildA extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(props) => {
          return <div>This is child A: {JSON.stringify(props.stateValue)}</div>;
        }}
      </MyContext.Consumer>
    );
  }
}
export default ChildA;
