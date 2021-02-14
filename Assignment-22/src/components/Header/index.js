/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import ImagePaths from "../../Images";
import path from "../../path";
import "./Header.css";
const LinkStyle = {
  textDecoration: "none",
  color: "#333333",
  textTransform: "capitalize",
};
export default class HomePageHeader extends PureComponent {
  constructor() {
    super();
    this.state = {
      datasetId: "1",
    };
  }

  //function to handle when user clicks a list item
  handleClick = (e) => {
    this.setState({ datasetId: e.target.dataset.id });
  };

  //add or remove active class depends on the clicked link
  toggleActiveClass = (elementId) => {
    const datasetId = parseInt(this.state.datasetId);
    return datasetId === elementId ? "nav-item m-2 active" : "nav-item m-2";
  };

  render() {
    return (
      <>
        {/* header section starts */}
        <section className="home-page-header-wrapper">
          <div className="navbar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <img
              src={ImagePaths.loginPageImage}
              alt="logo"
              className="img-responsive"
            />
            <ul className="navbar-links">
              <Link to={path.learners} style={LinkStyle}>
                <li
                  className={this.toggleActiveClass(1)}
                  data-id="1"
                  onClick={this.handleClick.bind(this)}
                >
                  Learners
                </li>
              </Link>
              <Link to={path.hire} style={LinkStyle}>
                <li
                  className={this.toggleActiveClass(2)}
                  data-id="2"
                  onClick={this.handleClick.bind(this)}
                >
                  Hire Developers
                </li>
              </Link>
              <Link to={path.blog} style={LinkStyle}>
                <li
                  className={this.toggleActiveClass(3)}
                  data-id="3"
                  onClick={this.handleClick.bind(this)}
                >
                  blog
                </li>
              </Link>
              <Link to={path.login} style={LinkStyle}>
                <li
                  className={this.toggleActiveClass(4)}
                  data-id="4"
                  onClick={this.handleClick.bind(this)}
                >
                  login
                </li>
              </Link>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
