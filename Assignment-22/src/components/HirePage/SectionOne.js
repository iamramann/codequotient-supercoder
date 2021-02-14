/* eslint-disable no-unused-vars */
import React from "react";
function SectionOne() {
  return (
    <>
      <section className="section-one-hire">
        <div className="container hire-s1-grid">
          <div className="hire-s1-c1">
            <p className="hire-s1-p1">Hire top tech talent.</p>
            <p className="hire-s1-p2">
              We are solving the problem of tech talent shortage by preparing
              the top students from colleges to become highly valuable tech
              professionals. We have built tools and processes to identify and
              train the extraordinary talent from these colleges.
            </p>
            <button className="btn btn-custom">Get in touch</button>
          </div>
          <div className="hire-s1-c2">
            <img src="./images/hire-img-1.svg" alt="Random" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionOne;
