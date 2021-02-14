import React from "react";
function SectionTwo() {
  return (
    <>
      <section className="section-two">
        <div className="s2-grid">
          <div className="s2-img">
            <img
              src="https://codequotient.com/websiteNew/assets/img/website/homepage/analytics.svg"
              alt="svg"
            />
          </div>
          <div className="s2-stats">
            <div className="s2-stats-1">
              <h1 className="s2-h1">17K+</h1>
              <p className="s2-p">Active learners</p>
            </div>
            <div className="s2-stats-1">
              <h1 className="s2-h1"> 10M+</h1>
              <p className="s2-p"> Submissions</p>
            </div>
            <div className="s2-stats-1">
              <h1 className="s2-h1">500+</h1>
              <p className="s2-p">Learners got placed in last 6 months</p>
            </div>
            <div className="s2-stats-1">
              <h1 className="s2-h1">10</h1>
              <p className="s2-p">Universities actively using CodeQuotient</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionTwo;
