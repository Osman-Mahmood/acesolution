import React from "react";

import teams from "../../assets/svg/Teams.svg";
import services from "../../assets/svg/Services.svg";
import focus from "../../assets/svg/Focus.svg";

import "./SliderStyle.css";

const WhyUs = () => {
  return (
    <div className="p-lg-5 p-md-5 p-sm-5 p-2 py-5">
      <h2 className="ace-provide">Why Choose Us?</h2>
      <p className="text-center py-3">
        Our experts are committed to helping you achieve your business goals,
        work to the highest standards,
        <br />
        communicate effectively, and deliver a
        reliable, future proof and user-centered product.
      </p>
      <div className="d-flex whyus-card">
        <div className="card p-2 border-0">
          <img src={teams} height="60" alt="why Us" />
          <h5 className="text-center text-blue py-3">Dedicated Teams</h5>
          <p className="details-typography">
            Our dedicated professionals are experts in providing dependable
            solutions across all categories.
          </p>
        </div>
        <div className="card p-2 border-0">
          <img src={services} height="60" alt="why Us" />

          <h5 className="text-center text-blue py-3">Wide Array of Services</h5>
          <p className="details-typography">
            We reduce your IT hassles and costs with a wide range of premium
            services and ideal <br /> solutions.
          </p>
        </div>
        <div className="card p-2 border-0">
          <img src={focus} height="60" alt="why Us" />
          <h5 className="text-center text-blue py-3">Focus on Innovation</h5>
          <p className="details-typography">
            We help businesses stay ahead of trends by building innovative and
            futureproof IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
