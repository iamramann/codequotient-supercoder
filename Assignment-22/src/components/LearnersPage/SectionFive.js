import React from "react";
function SectionFive() {
  return (
    <>
      <section className="section-five">
        <div className=" container s5-grid">
          <div className="s5-r1">
            <p className="s5-r1-text1">
              {" "}
              Best way to learn is by building Projects.{" "}
            </p>
            <p className="s5-r1-text2">
              These are the kind of projects you’ll build in this program!
            </p>
          </div>
          <div className="s5-r2">
            <div className="s5-r2-1">
              <img src="./images/pac-man-2.jpg" alt="Random" />
              <p className="s5-r2-text1">Pac-Man</p>
              <p className="s5-r2-text2">
                Build the Legendary game for the old age of computers
              </p>
            </div>
            <div className="s5-r2-1">
              <img src="./images/pportfolio.jpg" alt="Random" />
              <p className="s5-r2-text1">A personal portfolio</p>
              <p className="s5-r2-text2">
                BA beautiful portfolio to show off to potential employers.
              </p>
            </div>
            <div className="s5-r2-1">
              <img src="./images/netflixclone.jpg" alt="Random" />
              <p className="s5-r2-text1">Netflix clone</p>
              <p className="s5-r2-text2">
                Build a full-blown Netflix clone in React JS.
              </p>
            </div>
            <div className="s5-r2-1">
              <img src="./images/Jeopardy.jpg" alt="Random" />
              <p className="s5-r2-text1">Jeopardy</p>
              <p className="s5-r2-text2">
                Build Jeopardy with CSS Grid and an API.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFive;
