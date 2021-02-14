import React from "react";
export default function SectionTwo() {
  return (
    <>
      <section className="section-eight">
        <div className="container s8-grid">
          <p className="s8-grid-r1">Why do companies hire CodeQuotient grads</p>
          <div className="s8-grid-r2">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">
                <p
                  style={{
                    fontSize: "80px",
                    color: "#de6834",
                    fontWeight: "bold",
                  }}
                >
                  1
                </p>
                We select
                <br /> Only the Best
              </p>
              <p className="s8-p2">
                Only 10% are selected in our program after screening of
                thousands of applicants. We believe in seeing beyond technical
                skills, so the accepted candidates are verified for integrity
                and interpersonal skills.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">
                <p
                  style={{
                    fontSize: "80px",
                    color: "#de6834",
                    fontWeight: "bold",
                  }}
                >
                  2
                </p>
                CodeQuotient <br />
                Verified Developers
              </p>
              <p className="s8-p2">
                Unlike other training programs, at CQ, learners work directly
                with our mentors for about 6 months, which places us in an
                exceptional position to make informed recommendations. Their
                Live-profiles showcase their verified projects (demos and code),
                which can be executable directly on our platform.
              </p>
            </div>
            <div>
              <p className="s8-p1">
                <p
                  style={{
                    fontSize: "80px",
                    color: "#de6834",
                    fontWeight: "bold",
                  }}
                >
                  3
                </p>
                Production Ready
                <br /> Programmers
              </p>
              <p className="s8-p2">
                Projects are the Integral part of our courses. All learners
                build at least two market-ready applications using the latest
                technologies by the time they complete the course. Their work on
                live projects expose them to the challenges of the production
                environment and are ready to be productive from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
