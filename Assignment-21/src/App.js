/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import SignupAndLogin from "./container/SignupAndLogin";
import Header from "./components/Header";
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SignupAndLogin />
      </>
    );
  }
}
