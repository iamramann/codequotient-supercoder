import { Link } from "react-router-dom";
import "./style.css";
export default function LoginForm() {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="form-container form-border">
            <h1>Login Form</h1>
            {/* <hr /> */}
            {/* login form start */}
            <form>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="username">Username</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username*"
                    required="{true}"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="username">Password</label>
                </div>
                <div className="col-75">
                  <input
                    type="Password"
                    id="Password"
                    placeholder="Enter your Password*"
                    required="{true}"
                  />
                </div>
              </div>
              <div className="row">
                <Link to="/signup">
                  <label className="link1">New user here!</label>
                </Link>
                <button>Submit</button>
              </div>
            </form>
            {/* login form end */}
          </div>
        </div>
      </section>
    </>
  );
}
