import React from "react";
function SectionTen() {
  return (
    <>
      {/* section ten starts */}
      <section className="section-ten">
        <div className=" container s-10-grid">
          <div className="s-10-r1">
            <span className="s-10-r1-span">Application Process</span>
          </div>
          <div className="s-10-r2">
            <div className="s-10-col">
              <p className="s10-p1">STEP 1</p>
              <p className="s10-p2">
                Fill the application and take our online assessment
              </p>
              <p className="s10-p3">
                Submit your complete application. After reading your
                application, we respond with an invitation to take our online
                assessment.
              </p>
            </div>
            <div className="s-10-col s-10-col-x">
              <p className="s10-p1">STEP 2</p>
              <p className="s10-p2">Interview & Decision</p>
              <p className="s10-p3">
                Depending on your assessment outcome, we invite you to a
                technical Skype interview. We deliver an admissions decision to
                you, and talk about next-steps.
              </p>
            </div>
            <div className="s-10-col">
              <p className="s10-p1">STEP 3</p>
              <p className="s10-p2">Enroll and start pre work</p>
              <p className="s10-p3">
                Pay the registration fees to enroll in the course and start the
                pre work of your course on our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section ten ends */}
    </>
  );
}
export default SectionTen;
