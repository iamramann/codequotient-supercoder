// D:\Raman\All Code\Web Development\Playground\login-page-21
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login";
import SignupPage from "./components/SignUp";
import Header from "./components/Header";
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <SignupPage />
          </Route>
          <Route exact path="/login">
            <SignupPage />
          </Route>
          <Route exact path="/signup">
            <LoginPage />
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </>
    );
  }
}
