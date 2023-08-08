import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <h1>Homes</h1>
          <span className="secondaryText">
          Guiding your real estate dreams with creative marketing,  <br />
          making property possibilities come to life.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">New Delhi, India</span>
          <div className="flexCenter f-menu">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
