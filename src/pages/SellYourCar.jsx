import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellYourCar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carName: '',
    brand: '',
    modelYear: '',
    price: '',
    ownerType: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation before navigating
    const { carName, brand, modelYear, price, ownerType, image } = formData;
    if (carName && brand && modelYear && price && ownerType && image) {
      console.log('Car Data:', formData);
      navigate('/sell-success');
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <div className="bg-black text-white py-16 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto bg-black text-white p-8 rounded-lg shadow-lg shadow-orange-400">
        <h2 className="text-4xl font-bold text-center mb-6 text-orange-500">Sell Your Car</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-orange-400">Car Name</label>
            <input
              type="text"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              required
              placeholder="Enter car name"
              className="w-full px-4 py-2 bg-black text-white border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-orange-400">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              placeholder="Enter car brand"
              className="w-full px-4 py-2 bg-black text-white border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-orange-400">Model Year</label>
            <input
              type="number"
              name="modelYear"
              value={formData.modelYear}
              onChange={handleChange}
              required
              placeholder="Enter model year"
              className="w-full px-4 py-2 bg-black text-white border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-orange-400">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Enter car price"
              className="w-full px-4 py-2 bg-black text-white border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-orange-400">Owner Type</label>
            <select
              name="ownerType"
              value={formData.ownerType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black text-white border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Owner Type</option>
              <option value="First Owner">First Owner</option>
              <option value="Second Owner">Second Owner</option>
              <option value="Third Owner">Third Owner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-orange-400">Car Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black text-white border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg border-2 border-orange-500 hover:bg-black hover:text-orange-500 transition duration-300"
          >
            Submit Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellYourCar;
