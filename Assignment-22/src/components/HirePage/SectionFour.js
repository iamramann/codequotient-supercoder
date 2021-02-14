import React from "react";
export default function SectionFour() {
  return (
    <>
      <section className="section-eight">
        <div className="container s8-grid">
          <p className="s8-grid-r1">How we can help you?</p>
          <p
            style={{ fontSize: "22px", textAlign: "center", fontWeight: "200" }}
          >
            We evaluate the requirements of our partners and match the best
            candidates for the selection process. Selected candidates are then
            engaged in one of these models
          </p>
          <div className="s8-grid-r2">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">
                FULL TIME
                <br /> HIRES
              </p>
              <p className="s8-p2">
                Select from a pool of immensely talented programmers who are
                learnt, vetted and specially trained to plugin straight into
                your ongoing projects.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="s8-p1">
                DEVELOPERS ON <br />
                PREMISES
              </p>
              <p className="s8-p2">
                Developers will be deployed to the partner’s location and work
                directly with their team incase your requirement is temporary,
                programmers stay on our pay roll.
              </p>
            </div>
            <div>
              <p className="s8-p1">
                MANAGED REMOTE <br /> DEVELOPERS
              </p>
              <p className="s8-p2">
                Managed developers who work fully integrated in your team,
                according to your processes and your projects. We just manage
                them in our office.
              </p>
            </div>
          </div>
        </div>
        <section className="section-nine" style={{ margin: "50px" }}>
          <div className="container s9-grid">
            <div className="s9-r1">
              <p className="s9-r1-p1">Our most common tech stacks are</p>
              <p style={{ textAlign: "center", margin: "20px", color: "#333" }}>
                React.js, Node.js, Python, Java, PHP, Android and React Native.
              </p>
              <p style={{ textAlign: "center", margin: "20px", color: "#333" }}>
                We can support additional technologies also depending on scope
                and availability.
              </p>
            </div>
            <div className="s9-r2">
              <img src="./images/react-2.svg" alt="Random" />
              <img src="./images/nodejs.png" alt="Random" />
              <img src="./images/python.png" alt="Random" />
              <img src="./images/android-logomark.svg" alt="Random" />
              <img src="./images/java-4.svg" alt="Random" />
              <img src="./images/php-1.svg" alt="Random" />
              <img className="gojek" src="./images/oyo.png" alt="Random" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
