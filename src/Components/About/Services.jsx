import React from 'react';

const servicesList = [
  {
    id: 1,
    title: 'Car Sales',
    desc: 'Explore a wide variety of new and pre-owned vehicles with guaranteed quality.',
    icon: '🚗',
  },
  {
    id: 2,
    title: 'Financing Options',
    desc: 'Flexible financing and loan options tailored to your budget.',
    icon: '💰',
  },
  {
    id: 3,
    title: 'Vehicle Servicing',
    desc: 'Top-notch maintenance and repair services by certified professionals.',
    icon: '🛠️',
  },
  {
    id: 4,
    title: 'Trade-In Offers',
    desc: 'Get the best value for your current vehicle with easy trade-in programs.',
    icon: '🔄',
  },
  {
    id: 5,
    title: 'Test Drives',
    desc: 'Schedule a test drive and experience your dream car before buying.',
    icon: '🧑‍✈️',
  },
  {
    id: 6,
    title: 'Insurance Assistance',
    desc: 'We help you get the best insurance coverage for peace of mind.',
    icon: '🛡️',
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white px-6 py-16">
      <h2 className="text-6xl font-bold text-center text-orange-400 mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-zinc-900 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-500/90 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
