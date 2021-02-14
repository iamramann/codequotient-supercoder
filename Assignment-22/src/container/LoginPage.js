import React, { PureComponent } from "react";
import LoginPageHeader from "../components/LoginPage/Header";
import LoginPageForm from "../components/LoginPage/LoginForm";
export default class LoginPageContainer extends PureComponent {
  render() {
    return (
      <>
        <div className="login-page-wrapper">
          <LoginPageHeader />
          <LoginPageForm />
        </div>
      </>
    );
  }
}
