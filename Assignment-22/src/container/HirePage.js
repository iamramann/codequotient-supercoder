import React, { PureComponent } from "react";
import SectionOne from "../components/HirePage/SectionOne";
import SectionTwo from "../components/HirePage/SectionTwo";
import SectionThree from "../components/HirePage/SectionThree";
import SectionFour from "../components/HirePage/SectionFour";
import Footer from "../components/Footer/Footer";
export default class HirePageContainer extends PureComponent {
  render() {
    return (
      <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </>
    );
  }
}
