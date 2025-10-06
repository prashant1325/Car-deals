import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ServiceForm = () => {
  const location = useLocation();
  const { service } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    appointmentDate: '',
    brand: '',
    model: '',
    vehicleNumber: '',
    year: '',
    services: [],
    comments: '',
  });

  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'services') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      appointmentDate: '',
      brand: '',
      model: '',
      vehicleNumber: '',
      year: '',
      services: [],
      comments: '',
    });
    setError('');
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.appointmentDate ||
      !formData.brand ||
      !formData.model ||
      !formData.vehicleNumber ||
      !formData.year
    ) {
      setError('All required fields must be filled.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate submission
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-24 px-4">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Service Request Form</h1>
        <h2 className="text-xl text-center text-orange-400 mb-4">Service: {service}</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {isSubmitted ? (
          <div className="bg-green-500 text-white p-6 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-2">Thank you for your submission!</h3>
            <p>Your request has been successfully submitted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:border-orange-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:border-orange-500 focus:outline-none"
                placeholder="10-digit phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:border-orange-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">Preferred Appointment Date</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:border-orange-500 focus:outline-none"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Vehicle Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Car Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g. Toyota"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Car Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g. Corolla"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Vehicle Number</label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g. MH12 AB 1234"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Year of Purchase</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g. 2018"
                  min="1990"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>

           

            {/* Additional Comments */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">Additional Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-zinc-700 focus:border-orange-500 focus:outline-none"
                placeholder="Mention any specific problems or requests..."
              ></textarea>
            </div>

          
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:border-white border border-transparent transition-colors duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ServiceForm;
