import React from "react";

const StaffCard = ({ img, name, role }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden text-white text-center hover:scale-105 hover:bg-orange-500 transition-all duration-300">
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-orange-300 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
};

export default StaffCard;
