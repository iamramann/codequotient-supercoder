// login form page
import { Link } from "react-router-dom";
import React from "react";
import "./LoginForm.css";
export default function LoginForm() {
  return (
    <>
      <div className="login-page-form-wrapper">
        <div className="login-page-form container">
          <div className="my-form">
            <h3 className="login_heading">Log Into Your Account</h3>
            <form>
              <div className="row">
                <input type="text" placeholder="Email Address*" />
              </div>
              <div className="row">
                <input type="Password" placeholder="Password*" />
              </div>
              <div className="row">
                <button className="btn-custom btnx">Sign in</button>
              </div>
              <div className="row">
                <Link
                  to="/forgot"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Lato , sans-serif)",
                  }}
                >
                  <p style={{ textAlign: "center" }}>Forgot Your Password?</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
