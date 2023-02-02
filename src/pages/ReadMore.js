import React from "react";
import { useParams } from "react-router-dom";

import UiUxDesgin from "../components/Services/UiUxDesgin";
import MobileServices from "../components/Services/MobileServices";
import Sqa from "../components/Services/Sqa";
import Bussiness from "../components/Services/Bussiness";
import Wordpress from "../components/Services/Wordpress";
import Technical from "../components/Services/Technical";
import WebServices from "../components/Services/WebServices";
import Seo from "../components/Services/Seo";
import SliderComponent from "../components/Home/SliderComponent";

const ReadMore = () => {
  const { ReadMore } = useParams();

  return (
    <React.Fragment>
      <div className="pt-5"></div>
      {ReadMore === "UI-UX-Design" && <UiUxDesgin />}
      {ReadMore === "Web-Development" && <WebServices />}
      {ReadMore === "Mobile-App-Development" && <MobileServices />}
      {ReadMore === "Quality-Assurance" && <Sqa />}
      {ReadMore === "Business-Intelligance" && <Bussiness />}
      {ReadMore === "WordPress-Development" && <Wordpress />}
      {ReadMore === "Technical-Writing" && <Technical />}
      {ReadMore === "Search-Engine-Optimization" && <Seo />}
      <h3 className="text-center mt-3 mb-0">OUR OTHER SERVICES</h3>
      <SliderComponent />
    </React.Fragment>
  );
};

export default ReadMore;
