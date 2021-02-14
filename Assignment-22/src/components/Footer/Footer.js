/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col-1">
            <div>
              <p className="footer-p-1">
                <span
                  style={{
                    fontSize: "27px",
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  code
                </span>
                <span
                  style={{
                    fontSize: "27px",
                    color: "#000",
                    fontWeight: "bolder",
                  }}
                >
                  quotient
                </span>
              </p>
              <p className="footer-p-1">All rights reserved 2021.</p>
              <div className="social-media">
                <i class="fab fa-facebook fa-2x"></i>
                <i class="fab fa-youtube fa-2x"></i>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="footer-col-2">
            <div className="footer-links">
              <a>About</a>
              <a>Contact</a>
              <a>Privacy Policy</a>
              <a>Terms and Conditions</a>
              <a>We're Hiring!</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
