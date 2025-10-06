import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/9525730.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-orange-400">
          Drive Your Dream Car Today..
        </h1>

        <p className="text-xl sm:text-3xl mb-8 text-white">
          Premium listings. Unbeatable deals. Hassle-free car buying and selling experience.
        </p>

        <div className="flex justify-center gap-6">
         
          <Link to="/car">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold shadow-lg border-4 border-orange-400 hover:bg-orange-500 hover:text-black hover:border-black transition duration-300">
              Browse Cars
            </button>
          </Link>

          
          <Link to="/sell-car">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold border-4 border-orange-400 hover:bg-orange-500 hover:text-black hover:border-black transition duration-300">
              Sell Your Car
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
