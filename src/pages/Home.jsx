import React from "react";
import Hero from "../Components/Home/Hero/Hero";
import Featured from "../Components/Home/Featured/Featured";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <WhyUs />
      <Footer/>
    </div>
  );
};

export default Home;
