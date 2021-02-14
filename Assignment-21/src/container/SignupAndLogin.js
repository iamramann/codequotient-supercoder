import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../components/SignupForm";
import LoginPage from "../components/LoginForm";

export default class SignupAndLogin extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </>
    );
  }
}
