import React, { Component } from "react";
import { MyContext } from "./ContextFile";

export default class ChildB extends Component {
  static contextType = MyContext;
  render() {
    console.log(this.context);
    const { setMyContext } = this.context;
    return (
      <div>
        This is passing data from child B to A
        <button
          onClick={() => {
            setMyContext({ name: "kjdbisd" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
