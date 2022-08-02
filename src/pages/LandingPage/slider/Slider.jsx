import React from "react";
import { Link } from "react-router-dom";
import "./slider.scss";

const Slider = () => {
  return (
    <div className="slider_container">
      <div className="slider_warpper">
        <Link to={"/best-sellers"}>
          <div className="field">Best Sellers</div>
        </Link>
        <div className="field">Today's Deals</div>
        <div className="field">Customer Service</div>
        <div className="field">Membership</div>
        <div className="field">New Releases</div>
        <div className="field">Top Releases</div>
        <div className="field">Frequent Purchases</div>
        <div className="field">Electronics</div>
        <div className="field">Customer Services</div>
      </div>
    </div>
  );
};

export default Slider;
