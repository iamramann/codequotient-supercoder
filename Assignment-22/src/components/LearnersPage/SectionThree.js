/* eslint-disable no-unused-vars */
import React from "react";
function SectionThree() {
  return (
    <>
      {/* section three starts */}
      <section className="section-three">
        <div className="container s3-grid">
          <div className="s3-col-1">
            <p className="s3-text1">
              12 weeks of Full Stack Development Program.
            </p>
            <p className="s3-text2">
              This is how your coding journey will be with CodeQuotient
            </p>
          </div>
          <div className="s3-col-2">
            <div className="course-dtl-1">
              <img src="./images/sprout.png" alt="Random" />
              <div className="course-dtl-sub-1">
                <p className="course-dtl-sub-2">Foundation</p>
                <p className="course-dtl-sub-3">
                  We will dive deep into the fundamentals of Computer science
                  going with our vision of setting a base for your long-term
                  programming career.
                </p>
              </div>
            </div>
            <div className="course-dtl-1">
              <img src="./images/fullstack.png" alt="Random" />
              <div className="course-dtl-sub-1">
                <p className="course-dtl-sub-2">Full Stack development</p>
                <p className="course-dtl-sub-3">
                  We start our full-stack training module by learning HTML5,
                  CSS, React for front end and Node.js, Express & MongoDB for
                  back end. You will spend most of your time developing projects
                  and will learn software development by implementation.
                </p>
              </div>
            </div>

            <div className="course-dtl-1">
              <img src="./images/code_icon.png" alt="Random" />
              <div className="course-dtl-sub-1">
                <p className="course-dtl-sub-2">Portfolio of Projects</p>
                <p className="course-dtl-sub-3">
                  The projects you build in this program will create an amazing
                  portfolio that showcases your skills and expertise.Show this
                  using “LIVE profile”, and stand out from the regular
                  applicants.
                </p>
              </div>
            </div>

            <div className="course-dtl-1">
              <img src="./images/coder.png" alt="Random" />
              <div className="course-dtl-sub-1">
                <p className="course-dtl-sub-2">Get your Dream Job!</p>
                <p className="course-dtl-sub-3">
                  After successful completion of this program we will connect
                  you with our hiring partners and help you land a dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three ends */}
    </>
  );
}

export default SectionThree;
