import { Link } from "react-router-dom";
import "./style.css";
export default function LoginPage() {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="form-container form-border">
            <h1>SignUp Form</h1>
            {/* login form start */}
            <form>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name*"
                    required="{true}"
                  />
                </div>
              </div>
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
                <div className="col-25">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col-75">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email*"
                    required="{true}"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="mobile">Mobile No.</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Enter your Mobile Number*"
                    required="{true}"
                  />
                </div>
              </div>

              <div className="row">
                <Link to="/login">
                  <label className="link1">Already registered!!</label>
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
