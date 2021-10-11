import React, { Component } from "react";
export const MyContext = React.createContext();

export class MyContextProvider extends Component {
  state = {};
  setMyContext = (data) => {
    this.setState((prevState) => ({ ...prevState, ...data }));
  };
  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider
        value={{
          stateValue: this.state,
          setMyContext: this.setMyContext,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}

export const MyContextConsumer = MyContext.Consumer;
