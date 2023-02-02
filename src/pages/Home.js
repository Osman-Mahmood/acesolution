import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Canvas from "../components/Home/Canvas";
import CardComp from "../components/Home/CardComp";
import OurBlogs from "../components/Home/OurBlogs";
import SliderComponent from "../components/Home/SliderComponent";
import WhyUs from "../components/Home/WhyUs";

const Home = () => {
  return (
    <React.Fragment>
      <SliderComponent className={"sider-section"} />
      <CardComp />
      <Canvas />
      <WhyUs />
      <OurBlogs />
      <ContactForm />
    </React.Fragment>
  );
};

export default Home;
