import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container1 from "./components/Container1";
import DocumentSection from "./components/DocumentSection";
import InfoSection from "./components/InfoSection";
import VideoSection from "./components/VideoSection";
import XcouponsSection from "./components/XcouponsSection";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="showcase" style={{ backgroundColor: "white" }}>
          <Navbar />
          <Container1 />
          <DocumentSection />
          <VideoSection />
          <InfoSection />
          <XcouponsSection />
          <Footer />
        </div>
      </div>
    );
  }
}
