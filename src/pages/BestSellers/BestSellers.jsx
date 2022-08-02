import React from "react";
import Slider from "../LandingPage/slider/Slider";
import "./BestSellers.css";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <div className="bestsellers_container">
      <div className="bestsellers_wrapper">
        <Slider />
        <div className="ml-3">
          <div className="bestsellers_heading text-2xl">
            Hindustan Inox Best Sellers
          </div>
          <p className="text-xs">
            Our most popular products based on sales. Updated hourly.
          </p>
        </div>
        <div className="flex m-3">
          <div className="w-3/12 m-2 ">
            <div className="text-sm font-semibold">Any Department</div>
            <div className="ml-3">
              <Link to={"/best-sellers"}>
                <div className="text-sm">Power tools</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Abrasives</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Adhesives Sealants and Tape</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Automobile Maintenance</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Bearing</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Electrical</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Cleaning</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Hydraulics</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Electronics & Robotics</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Fasteners</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Furniture, Hospitality and Food Service</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Hand Tools</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Hardware</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Machinery</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">IT & Electronics</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Industrial Automation</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">LED & Lights</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Lab Supplies</div>
              </Link>
              <Link to={"/best-sellers"}>
                <div className="text-sm">Lubricants and Oils</div>
              </Link>
            </div>
          </div>
          <div className="w-9/12 m-2">2</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
