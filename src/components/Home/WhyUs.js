import React from "react";

import group from "../../assets/svg/group.png";
import services from "../../assets/svg/Services.svg";
import idea from "../../assets/svg/idea.png";

import "./SliderStyle.css";

const WhyUs = () => {
  return (
    <div className="p-lg-5 p-md-5 p-sm-5 p-2 py-5">
      <h2 className="ace-provide">Why Choose Us?</h2>
      <p className="text-center py-3">
        Our experts are committed to helping you achieve your business goals,
        work to the highest standards,
        <br className="no"/>
        communicate effectively, and deliver a
        reliable, future proof and user-centered product.
      </p>
      <div className="d-flex whyus-card align-items-center">
        <div className="card p-2 border-0 align-items-center">
          <img className="text-center" src={group} height="80" width="70" alt="why Us" />
          <h5 className="text-center text-blue ">Dedicated Teams</h5>
          <p className="details-typography">
            Our dedicated professionals are experts in providing dependable
            solutions across all categories.
          </p>
        </div>
        <div className="card p-4 border-0 align-items-center">
          <img src={services} height="80" width="70" alt="why Us" />

          <h5 className="text-center text-blue mt-3">Wide Array of Services</h5>
          <p className="details-typography">
            We reduce your IT hassles and costs with a wide range of premium
            services and ideal <br /> solutions.
          </p>
        </div>
        <div className="card p-2 border-0 align-items-center">
          <img className="text-center" src={idea} height="80" width="70" alt="why Us" />
          <h5 className="text-center text-blue">Focus on Innovation</h5>
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
