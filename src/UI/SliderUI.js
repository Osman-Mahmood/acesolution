import React from "react";
import { useDispatch } from "react-redux/es";
import { Link } from "react-router-dom";
import { mySliceActions } from "../store/Slice";

import "./UIStyles.css";

const SliderUI = (props) => {
  const dispatch = useDispatch();

  const handleServicesClick = () => {
    dispatch(mySliceActions.handleServicesRouting());
  };

  return (
    <Link
      className="text-decoration-none"
      to={props.linkTo}
      onClick={() => handleServicesClick()}
    >
      <div className={`card ${props.className} card-sec `}>
        <div className="main-card p-3">
          <div className="d-flex">
            <img src={props.image} alt="Cards" />
            <h5 className="ms-2 text-start pt-2 mb-0 content-color">
              {props.title}
            </h5>
          </div>
          <div className="text-start text-dark py-1 font-small mt-3">
            {props.detailes}
          </div>
          <div className="d-flex align-items-center text-start content-color to-scroll">
            <span style={{ fontWeight: "600" }}>Read More</span>
            <i className="bi bi-arrow-right content-color"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SliderUI;
