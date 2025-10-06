import React from "react";
import Intro from "../Components/About/Intro"; 
import Our from "../Components/About/our"; 
import Services from "../Components/About/Services"; 
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const About = () => {
  return (
    <>
      <Intro />
      <Our />
      <Services />
      <WhyUs />
      <Footer />
    </>
  );
};

export default About;
