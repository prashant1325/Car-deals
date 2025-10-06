import React from 'react';
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import WhyUsCard from './WhyUsCard';

const WhyUs = () => {
  return (
    <div className="bg-black text-white px-6 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Experience the Difference with <span className="text-orange-400">Velocity Motors</span>
      </h1>

      <p className="text-center max-w-3xl mx-auto text-lg mb-10">
        At Velocity Motors, we redefine what it means to drive with confidence and class. 
        From luxury and performance vehicles to exceptional customer service, every detail is designed with you in mind. 
        Discover a seamless car-buying experience powered by trust, transparency, and top-tier quality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <WhyUsCard icon={<SiWebmoney size={50} className="mx-auto text-orange-400" />} title="Flexible Financing" />
        <WhyUsCard icon={<FaUsers size={50} className="mx-auto text-orange-400" />} title="Trusted by Customers" />
        <WhyUsCard icon={<FaShippingFast size={50} className="mx-auto text-orange-400" />} title="Fast Delivery" />
      </div>
    </div>
  );
};

export default WhyUs;
