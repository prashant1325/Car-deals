import React from 'react';

const FeatureCard = ({ id, img, name, price }) => {
  return (
    <div className="p-4">
      <div className="bg-black rounded-xl border-b-[6px] border-transparent hover:border-orange-500 hover:drop-shadow-[0_8px_8px_rgba(255,115,0,0.7)] overflow-hidden transition duration-300 transform hover:-translate-y-2">
        <div className="w-full h-64">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <h2 className="text-orange-300 text-md font-bold mt-2 transition-colors duration-300">
            Starting at {price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
