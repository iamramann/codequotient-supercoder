/* eslint-disable no-unused-vars */
import react, { Component } from "react";
// import LeftSection from "../LeftSection";
// import RightSection from "../RightSection";
import "./mainContent.css";
export default class MainContent extends Component {
  render() {
    return (
      <>
        <section className="main-content">
          <div className="container flex">
            <div className="left-div"></div>
            <div className="right-div"></div>
          </div>
        </section>
      </>
    );
  }
}
