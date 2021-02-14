/* eslint-disable no-unused-vars */
import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPageContainer from "./container/LoginPage";
import LearnersPageContainer from "./container/LearnersPage";
import HirePageContainer from "./container/HirePage";
import Header from "./components/Header";
import "./style.css";
import path from "./path";
export default class App extends PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Route exact path={path.learners}>
            <Header />
            <LearnersPageContainer />
          </Route>
          <Route exact path={path.hire}>
            <Header />
            <HirePageContainer />
          </Route>
          <Route exact path={path.blog}>
            <Header />
          </Route>
          <Route exact path={path.login}>
            <LoginPageContainer />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </>
    );
  }
}
