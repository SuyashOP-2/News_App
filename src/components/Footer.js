import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>NEWS APP</h4>
            <h1 className="list-unstyled">
              <li>+91 8010774827</li>
              <li>PUNE INDIA</li>
              <li>123 STREET SAKAL NAGAR AUNDH </li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>PARTNERSHIP</h4>
            <ui className="list-unstyled">
              <li>ESAKAL</li>
              <li>TECHKY NEWS</li>
              <li>EBHARAT</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>ANY QUERY</h4>
            <ui className="list-unstyled">
              <li>CONTACT US</li>
              <li>SERVICES</li>
              <li>ABOUT</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} NEWS APP | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
