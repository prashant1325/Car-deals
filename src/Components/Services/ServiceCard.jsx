import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCards = ({ icon, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Navigating to form for: ${title}`); // Make sure this is logging
    navigate("/service-form", { state: { service: title } });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-zinc-900 text-white rounded-xl p-6 shadow-lg border border-zinc-700 hover:border-orange-500 hover:shadow-orange-500/30 transition-all duration-300 text-center"
    >
      <div className="text-4xl mb-3 text-orange-500">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-orange-400">{title}</h2>
    </div>
  );
};

export default ServiceCards;
