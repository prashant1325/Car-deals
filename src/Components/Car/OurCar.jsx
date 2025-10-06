import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sports from "../../assets/img/sports.webp";
import sports2 from "../../assets/img/sports2.webp";
import sports3 from "../../assets/img/sports3.webp";
import sports4 from "../../assets/img/sports4.webp";
import sports5 from "../../assets/img/sports5.webp";

import suv1 from "../../assets/img/suv1.webp";
import suv2 from "../../assets/img/suv2.webp";
import suv3 from "../../assets/img/suv3.webp";
import suv4 from "../../assets/img/suv4.webp";
import suv5 from "../../assets/img/suv5.webp";

import sedan1 from "../../assets/img/sedan1.webp";
import sedan2 from "../../assets/img/sedan2.webp";
import sedan3 from "../../assets/img/sedan3.webp";
import sedan4 from "../../assets/img/sedan4.webp";
import sedan5 from "../../assets/img/sedan5.webp";

const carData = [
  { id: 1, category: "Sports", name: "Ferrari 488", price: "₹3.90 Crore", owner: "First Owner", img: sports },
  { id: 2, category: "Sports", name: "Lamborghini Huracán", price: "₹3.22 Crore", owner: "Second Owner", img: sports2 },
  { id: 3, category: "SUV", name: "BMW X7", price: "₹1.31 Crore", owner: "First Owner", img: suv1 },
  { id: 4, category: "SUV", name: "Range Rover Evoque", price: "₹88 Lakh", owner: "Second Owner", img: suv2 },
  { id: 5, category: "Sedan", name: "Jaguar XF", price: "₹76.00 Lakh", owner: "First Owner", img: sedan1 },
  { id: 6, category: "Sedan", name: "BMW 3 Series", price: "₹86.31 Lakh", owner: "Second Owner", img: sedan2 },
  { id: 7, category: "Sports", name: "Ford Mustang Shelby GT500", price: "₹1.5 Crore", owner: "Third Owner", img: sports3 },
  { id: 8, category: "Sports", name: "McLaren 720S", price: "₹4.65 Crore", owner: "Second Owner", img: sports4 },
  { id: 9, category: "Sports", name: "Porsche 911 Turbo S", price: "₹3.35 Crore", owner: "First Owner", img: sports5 },
  { id: 10, category: "SUV", name: "Rolls-Royce Cullinan", price: "₹10.5 Crore", owner: "First Owner", img: suv3 },
  { id: 11, category: "SUV", name: "Bentley Bentayga EWB", price: "₹6.00 Crore", owner: "Second Owner", img: suv4 },
  { id: 12, category: "SUV", name: "Lamborghini Urus SE", price: "₹4.57 Crore", owner: "Third Owner", img: suv5 },
  { id: 13, category: "SUV", name: "Rolls-Royce Ghost", price: "₹10.52 Crore", owner: "First Owner", img: sedan3 },
  { id: 14, category: "Sedan", name: "Volvo S90", price: "₹68.25 Lakh", owner: "Second Owner", img: sedan4 },
  { id: 15, category: "Sedan", name: "Lexus LS", price: "₹1.96 Crore", owner: "Third Owner", img: sedan5 },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 2500,
  cssEase: "ease-in-out",
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const CarCarousel = ({ title, cars }) => (
  <div className="mb-20">
    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 text-center">
      {title} <span className="text-orange-400">Cars</span>
    </h2>
    <Slider {...sliderSettings}>
      {cars.map((car) => (
        <div key={car.id} className="group p-4">
          <div className="rounded-xl overflow-hidden bg-black transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-orange-500">
            <div className="h-[280px] w-full">
              <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-zinc-900 p-4 text-center min-h-[180px] flex flex-col justify-between">
              <div>
                <h3 className="text-white text-lg font-bold">{car.name}</h3>
                <p className="text-orange-300 font-medium">{car.price}</p>
                <p className="text-gray-300 mb-3 text-sm">{car.owner}</p>
              </div>
              <Link to="/buy">
                <button className="text-sm bg-orange-500 hover:bg-black hover:text-orange-400 font-semibold px-3 py-1 rounded-md transition-all duration-300 w-fit mx-auto">
                  Book Now 
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

const OurCars = () => {
  const sportsCars = carData.filter((car) => car.category === "Sports");
  const suvCars = carData.filter((car) => car.category === "SUV");
  const sedanCars = carData.filter((car) => car.category === "Sedan");

  return (
    <div className="bg-black py-16 px-4 overflow-hidden">
      <h1 className="text-white font-bold text-5xl text-center mb-12">
        Explore Our <span className="text-orange-400">Car Collection</span>
      </h1>
      <CarCarousel title="Sports" cars={sportsCars} />
      <CarCarousel title="SUV" cars={suvCars} />
      <CarCarousel title="Sedan" cars={sedanCars} />
    </div>
  );
};

export default OurCars;
