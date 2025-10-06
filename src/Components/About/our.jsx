import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import staff1 from "../../assets/img/staff1.jpg";
import staff2 from "../../assets/img/coustomer.jpg";
import staff3 from "../../assets/img/staff3.jpg";
import staff4 from "../../assets/img/staff4.jpg";
import staff5 from "../../assets/img/staff5.jpg";
import staff6 from "../../assets/img/staff6.jpg";


const staffMembers = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Senior Sales Manager",
    img: staff1,
  },
  {
    id: 2,
    name: "Anjali Verma",
    role: "Customer Relations",
    img: staff2,
  },
  {
    id: 3,
    name: "Vikram Shah",
    role: "Technical Lead",
    img: staff3,
  },
  {
    id: 4,
    name: "Nisha Kapoor",
    role: "Finance Executive",
    img: staff4,
  },
  {
    id: 5,
    name: "Amit Desai",
    role: "Vehicle Consultant",
    img: staff5,
  },
  {
    id: 6,
    name: "Priya Joshi",
    role: "Marketing Specialist",
    img: staff6,
  },
];

const Our = () => {
  const settings = {
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-16 bg-black overflow-hidden">
      <h1 className="text-white font-bold text-6xl text-center mb-6">
        Meet Our <span className="text-orange-400">Team</span>
      </h1>
      <p className="text-white text-center max-w-2xl mx-auto mb-10">
        The passionate professionals who make your experience seamless and memorable.
      </p>

      <Slider {...settings}>
        {staffMembers.map((staff) => (
          <div key={staff.id} className="p-4">
            <div className="bg-black rounded-xl border-b-[6px] border-transparent hover:border-orange-500 hover:drop-shadow-[0_8px_8px_rgba(255,115,0,0.7)] overflow-hidden transition duration-300 transform hover:-translate-y-2 flex flex-col">
              
              {/* Image section with larger height */}
              <div className="h-[450px] w-full">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info box */}
              <div className="bg-zinc-900 p-4 text-center">
                <h1 className="text-lg font-semibold text-white">{staff.name}</h1>
                <h2 className="text-orange-300 text-md font-bold mt-2">
                  {staff.role}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Our;
