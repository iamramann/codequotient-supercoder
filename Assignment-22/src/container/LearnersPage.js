import React, { PureComponent } from "react";
import SectionTwo from "../components/LearnersPage/SectionTwo";
import SectionOne from "../components/LearnersPage/SectionOne";
import SectionThree from "../components/LearnersPage/SectionThree";
import SectionFour from "../components/LearnersPage/SectionFour";
import SectionFive from "../components/LearnersPage/SectionFive";
import SectionSix from "../components/LearnersPage/SectionSix";
import SectionSeven from "../components/LearnersPage/SectionSeven";
import SectionEight from "../components/LearnersPage/SectionEight";
import SectionNine from "../components/LearnersPage/SectionNine";
import SectionTen from "../components/LearnersPage/SectionTen";
import SectionEleven from "../components/LearnersPage/SectionEleven";
import SectionTwelve from "../components/LearnersPage/SectionTwelve";
import Footer from "../components/Footer/Footer";
export default class LearnersPageContainer extends PureComponent {
  render() {
    return (
      <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
        <SectionEleven />
        <SectionTwelve />
        <Footer />
      </>
    );
  }
}
