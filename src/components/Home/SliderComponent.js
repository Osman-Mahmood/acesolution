import React from "react";
import Slider from "react-slick";

import SilderContent from "../../assets/SilderContent";

import SliderUI from "../../UI/SliderUI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyle.css";

let settings = {
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const SliderComponent = (props) => {
  return (
    <div className={`${props.className} px-lg-5 px-md-5 px-sm-5`}>
    
      <Slider {...settings}>
        {SilderContent.map((data, index) => (
          <div className="asas" key={index}>
            <SliderUI
              linkTo={"/Services/" + data.id}
              image={data.image}
              title={data.title}
              detailes={data.detailes}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
