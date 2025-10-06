import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import carImg1 from "../../../assets/img/car.webp";
import carImg2 from "../../../assets/img/car2.webp";
import carImg3 from "../../../assets/img/car3.webp";
import carImg4 from "../../../assets/img/car4.webp";
import carImg5 from "../../../assets/img/car5.webp";
import carImg6 from "../../../assets/img/car6.webp";
import carImg7 from "../../../assets/img/car7.webp";

import FeatureCard from "./FeatureCard";

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: carImg1,
      name: "BMW 8 Series",
      price: "₹1.31 crore",
    },
    {
      id: 1,
      img: carImg2,
      name: "Mercedes-Benz E-Class",
      price: "₹92.50 lakh",
    },
    {
      id: 2,
      img: carImg3,
      name: "Lamborghini Huracán EVO",
      price: "₹4.99 crore ​",
    },
    {
      id: 3,
      img: carImg4,
      name: "Rolls-Royce Phantom",
      price: "₹8.99 crore",
    },
    {
      id: 4,
      img: carImg5,
      name: "Porsche Panamera",
      price: "₹2.34 crore",
    },
    {
      id: 5,
      img: carImg6,
      name: "Bentley Continental GT",
      price: "₹6.46 crore ​",
    },
    {
      id: 6,
      img: carImg7,
      name: " Range Rover SV Ranthambore ",
      price: "₹4.98 crore​",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,            // slower transition duration (ms)
    autoplaySpeed: 2000,   // time each slide stays (ms)
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-8 bg-black overflow-hidden">
      <h1 className="text-white font-bold text-5xl text-center mb-4">
        Showroom Highlights <span className="text-orange-400">Cars</span>
      </h1>
      <p className="text-white text-center max-w-2xl mx-auto mb-8">
        Discover a curated selection of premium cars that combine performance,
        style, and innovation. Whether you're looking for speed, luxury, or
        efficiency, our featured collection has something for every enthusiast.
        Drive the future — today.
      </p>
      <Slider {...settings}>
        {carsData.map((item) => (
          <FeatureCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
