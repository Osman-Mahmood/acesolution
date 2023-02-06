import React from "react";

import Card from "../../UI/Card";
import business from "../../assets/svg/business.png";
import bank from "../../assets/svg/bank.png";
import care from "../../assets/svg/care.png";
import server from "../../assets/svg/server.png";
import { Link } from "react-router-dom";

const CardComp = () => {
  return (
    <React.Fragment>
      <div className="solutions-sec px-5">
        <h2 className="ace-provide" style={{ marginTop: "-50px" }}>
          Ace Solutions Provides Full Range of <br />
          Software Services Your Company Needs
        </h2>
        <p className="text-center px-4">
          ACE Technologies provides digital solutions and services, including
          product design, web and mobile development, business intelligence, and
          quality assurance to our clients that span across a wide range of
          industries, sizes, and geographical locations with an aim to make a
          dent in the digital world. Our years of working experience in software
          design and development allowed us to develop scalable, secure, and
          interactive solutions.
        </p>
      </div>
      <div className="card-container px-lg-5 px-md-5 px-sm-5 pt-5 mb-3">
        <Link className="text-decoration-none w-100 mx-2" to={"/Business"}>
          <Card
            src={business}
            title={"Education"}
            detailes={
              "Are you looking for technologies catered to the education sector? Discover solutions that could reduce operating expenses, break geographical barriers, optimize academic management and most importantly make learning fun. At ZAPTA technologies we develop customized, end to end software to assist educational institutions to manage, educate and succeed."
            }
          />
        </Link>
        <Link className="text-decoration-none w-100 mx-2" to={"/Health"}>
          <Card
            className={"card-width"}
            src={care}
            title={"Health"}
            detailes={
              "At ACE Technologies, We designed, developed and deployed many software solutions and you can also Improve the quality of your medical services and enhance management functions to make your workflows productive! We offer a full spectrum of software design and development services and solutions for all sectors of healthcare. We do it all! Our software solutions make a difference with the best UX."
            }
          />
        </Link>
      </div>
      <div className="card-container px-lg-5 px-md-5 px-sm-5 pb-5 mt-3">
        <Link
          className="text-decoration-none w-100 mx-2"
          to={"/Finance&Banking"}
        >
          <Card
            // className={"me-2 ms-2"}
            src={bank}
            title={"Finance and Banking"}
            detailes={
              "We provide financial sector companies with customized fintech solutions to help them flourish in the turbulent market environment and develop an edge that sets them apart like no other. From mobile payments to peer-to-peer lending to AI-powered digital financial advisors, ZAPTA Technologies assists fintech startups and banks to provide unprecedented services while staying ahead."
            }
          />
        </Link>
        <Link className="text-decoration-none mx-2 w-100" to={"/Cloud"}>
          <Card
            className={"card-width"}
            src={server}
            title={"Data"}
            detailes={
              "How can you determine what information is most valuable for your business? We use predictive analytics technologies that can be implemented into both software applications and business processes to get insights for better decision making. Our highly qualified team of professional statisticians, machine learning experts, and programmers who convert data into practical data-driven applications."
            }
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CardComp;
