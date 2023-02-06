import React from "react";

import SilderContent from "../../assets/SilderContent";

import SliderUI from "../../UI/SliderUI";
import "./ServicesStyle.css";

const ServicesComp = () => {
  return (
    <div>
      <h1 className="text-dark padding-top mb-2 mt-3 pb-4 text-center">
        Services
      </h1>
      <p className="text-center pt-40 fw-4 fs-18">
        We’re committed to helping businesses streamline workflow and enhance
        customer <br className="no"/>
        experience with the following services.
      </p>
      <div className="services-container p-5">
        {SilderContent.map((data, index) => (
          <SliderUI
            className="services-card"
            key={index}
            linkTo={"/Services/" + data.id}
            image={data.image}
            title={data.title}
            detailes={data.detailes}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesComp;
