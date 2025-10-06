import React from 'react';

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-lg hover:shadow-orange-500 transition duration-300 text-center max-w-sm mx-auto hover:scale-105">
      <div className="mb-4 flex justify-center text-orange-400 hover:text-orange-500 transition-colors duration-300 text-4xl">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-300">
        At Velocity Motors, we offer top-notch services tailored to your needs.
        Whether it's flexible financing, expert assistance, or quick delivery,
        our team ensures your journey begins with satisfaction.
      </p>
    </div>
  );
};

export default WhyUsCard;
