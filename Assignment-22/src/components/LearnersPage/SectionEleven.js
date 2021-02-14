import React from "react";
function SectionEleven() {
  return (
    <>
      {/* section eleven start */}
      <section className="section-eleven">
        <div className="container s-11-grid">
          <div className="s-11-r1">
            <p className="s-11-p">Program Fees & Batches</p>
          </div>
          <div className=" s-11-r2">
            <div>
              <table class="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th className="s-11-th">Batches</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January 11, 2021</td>
                    <td>3 months</td>
                    <td style={{ color: "green" }}>Started</td>
                  </tr>
                  <tr style={{ backgroundColor: "#ddd" }}>
                    <td>February 15, 2021</td>
                    <td>3 months</td>
                    <td style={{ color: "orange" }}>Filling Fast</td>
                  </tr>
                  <tr>
                    <td>March 22, 2021</td>
                    <td>3 months</td>
                    <td style={{ color: "green" }}>Seats Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card">
              <p
                style={{
                  margin: "0px 16px 0px 0px",
                  fontSize: "15px",
                  color: "#333",
                  padding: "20px",
                }}
              >
                FEE
              </p>
              <span className="s11-gst">Rs 9,999* + GST</span>
              <p
                style={{
                  margin: "0px 0px 16px 0px",
                  fontSize: "15px",
                  color: "#333",
                  padding: "20px",
                }}
              >
                *Only for February 15, Batch
              </p>
              <button className="btn btn-custom">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* section eleven ends */}
    </>
  );
}
export default SectionEleven;
