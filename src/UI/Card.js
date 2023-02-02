import React from "react";
import "./UIStyles.css";

const Card = (props) => {
  return (
    <div className={`card card-tech w-100 p-3 ${props.className}`}>
      <img
        className="align-self-start"
        src={props.src}
        height="60px"
        alt="Software Services"
      />
      <h4 className="content-color text-start ">{props.title}</h4>
      <p className="text-start details-typography">{props.detailes}</p>
      <span className="content-color text-start">Learn More</span>
    </div>
  );
};

export default Card;
