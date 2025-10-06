import React from "react";

const CarCard = ({ name, price, owner, img, category }) => {
  return (
    <div className="p-3">
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img src={img} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-orange-400 font-bold mt-1">{price}</p>
          <p className="text-gray-400 text-sm">Owner: {owner}</p>
          <p className="text-sm text-gray-500 italic">{category}</p>
          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
