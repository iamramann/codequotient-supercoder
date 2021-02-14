//reating pre-login-navbar
import ImagesPath from "../../Images";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function LoginPageHeader() {
  return (
    <>
      <div className="login-page-header">
        <div className="flex">
          <Link to="/">
            <img
              src={ImagesPath.loginPageImage}
              className="img-responsive"
              alt="cq__logo__primary"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
