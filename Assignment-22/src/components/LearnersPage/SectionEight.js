import React from "react";
function SectionEight() {
  return (
    <>
      <section className="section-eight">
        <div className="container s8-grid">
          <p className="s8-grid-r1">
            CodeQuotient is for dedicated learners only.
          </p>
          <div className="s8-grid-r2">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">PROGRAMMING FUNDAMENTALS</p>
              <p className="s8-p2">
                Our curriculum does not start at the beginner level, so we
                expect a potential student to be familiar with the basics of
                coding (loops, conditions, arrays, objects, functions) and be
                able to apply that knowledge to solve problems.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">
                SINCERE <br /> LEARNERS
              </p>
              <p className="s8-p2">
                We are looking for learners who can bring in creative attitude
                towards problem solving, and who don’t give up when faced with
                problems they can’t solve immediately.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">
                TEAM <br /> PLAYERS
              </p>
              <p className="s8-p2">
                From pair programming to working in a group, we are looking for
                learners who like to grow together with their batch, take on
                challenges, and solve problems collectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionEight;
