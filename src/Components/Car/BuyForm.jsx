import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Sample car data array
const carData = [
  { id: 1, category: "Sports", name: "Ferrari 488", price: "₹3.90 Crore", owner: "First Owner" },
  { id: 2, category: "Sports", name: "Lamborghini Huracán", price: "₹3.22 Crore", owner: "Second Owner" },
  { id: 3, category: "SUV", name: "BMW X7", price: "₹1.31 Crore", owner: "First Owner" },
  { id: 4, category: "SUV", name: "Range Rover Evoque", price: "₹88 Lakh", owner: "Second Owner" },
  { id: 5, category: "Sedan", name: "Jaguar XF", price: "₹76.00 Lakh", owner: "First Owner" },
  { id: 6, category: "Sedan", name: "BMW 3 Series", price: "₹86.31 Lakh", owner: "Second Owner" },
  { id: 7, category: "Sports", name: "Ford Mustang Shelby GT500", price: "₹1.5 Crore", owner: "Third Owner" },
  { id: 8, category: "Sports", name: "McLaren 720S", price: "₹4.65 Crore", owner: "Second Owner" },
  { id: 9, category: "Sports", name: "Porsche 911 Turbo S", price: "₹3.35 Crore", owner: "First Owner" },
  { id: 10, category: "SUV", name: "Rolls-Royce Cullinan", price: "₹10.5 Crore", owner: "First Owner" },
  { id: 11, category: "SUV", name: "Bentley Bentayga EWB", price: "₹6.00 Crore", owner: "Second Owner" },
  { id: 12, category: "SUV", name: "Lamborghini Urus SE", price: "₹4.57 Crore", owner: "Third Owner" },
  { id: 13, category: "SUV", name: "Rolls-Royce Ghost", price: "₹10.52 Crore", owner: "First Owner" },
  { id: 14, category: "Sedan", name: "Volvo S90", price: "₹68.25 Lakh", owner: "Second Owner" },
  { id: 15, category: "Sedan", name: "Lexus LS", price: "₹1.96 Crore", owner: "Third Owner" },
];

const BuyForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carCategory: "",
    carModel: "",
    price: "",
    owner: "",
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "",
    emiMonths: "",
    address: "",
   purchaseDate: new Date().toISOString().split("T")[0], // default today’s date yyyy-mm-dd

  });

  // Handle all input/select changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset EMI months if payment method changed to non-EMI
    if (name === "paymentMethod" && value !== "EMI") {
      setFormData((prev) => ({ ...prev, emiMonths: "" }));
    }
  };

  // Autofill price and owner when carModel changes
  useEffect(() => {
    const selectedCar = carData.find((car) => car.name === formData.carModel);
    if (selectedCar) {
      setFormData((prev) => ({
        ...prev,
        price: selectedCar.price,
        owner: selectedCar.owner,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        price: "",
        owner: "",
      }));
    }
  }, [formData.carModel]);

  // Filter car models based on selected category
  const filteredCars = carData.filter((car) => car.category === formData.carCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do form validation or send formData to backend here
    console.log("Submitted Purchase Request:", formData);
    navigate("/buy-success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex justify-center items-center px-4 py-10">
      <div className="bg-black text-white rounded-xl shadow-xl p-10 w-full max-w-3xl border border-orange-500">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">Buy Your Dream Car</h1>
          <p className="text-gray-400">Complete the form with accurate details.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Car Details */}
          <h2 className="text-xl font-semibold text-orange-400">Car Details</h2>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Car Category</label>
            <select
              name="carCategory"
              value={formData.carCategory}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
            >
              <option value="">Select Category</option>
              <option value="Sports">Sports</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Car Model</label>
            <select
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
              disabled={!formData.carCategory}
            >
              <option value="">Select Model</option>
              {filteredCars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Car Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              readOnly
              placeholder="Auto-filled"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Owner</label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              readOnly
              placeholder="Auto-filled"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
            />
          </div>

          {/* Buyer Details */}
          <h2 className="text-xl font-semibold text-orange-400 pt-4">Buyer Details</h2>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="10-digit mobile number"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
            />
          </div>

          {/* Payment Method */}
<div>
  <label className="block text-sm font-medium text-orange-200 mb-1">Preferred Payment Method</label>
  <select
    name="paymentMethod"
    value={formData.paymentMethod}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
  >
    <option value="">Select Payment Method</option>
    <option value="Bank Transfer">Bank Transfer</option>
    <option value="EMI">EMI</option>
    <option value="UPI">UPI</option>
    <option value="Card Payment">Card Payment</option>
  </select>
</div>

{/* Conditional Inputs based on Payment Method */}

{formData.paymentMethod === "EMI" && (
  <div>
    <label className="block text-sm font-medium text-orange-200 mb-1">EMI Duration (Months)</label>
    <select
      name="emiMonths"
      value={formData.emiMonths || ""}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    >
      <option value="">Select Duration</option>
      <option value="6">6 Months</option>
      <option value="9">9 Months</option>
      <option value="12">12 Months</option>
      <option value="18">18 Months</option>
      <option value="24">24 Months</option>
    </select>
  </div>
)}

{formData.paymentMethod === "Bank Transfer" && (
  <div>
    <label className="block text-sm font-medium text-orange-200 mb-1">Bank Account Number</label>
    <input
      type="text"
      name="bankAccount"
      value={formData.bankAccount || ""}
      onChange={handleChange}
      required
      placeholder="Enter bank account number"
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    />
    <label className="block text-sm font-medium text-orange-200 mb-1 mt-2">IFSC Code</label>
    <input
      type="text"
      name="ifscCode"
      value={formData.ifscCode || ""}
      onChange={handleChange}
      required
      placeholder="Enter IFSC code"
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    />
  </div>
)}

{formData.paymentMethod === "UPI" && (
  <div>
    <label className="block text-sm font-medium text-orange-200 mb-1">UPI ID</label>
    <input
      type="text"
      name="upiId"
      value={formData.upiId || ""}
      onChange={handleChange}
      required
      placeholder="Enter your UPI ID"
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    />
  </div>
)}

{formData.paymentMethod === "Card Payment" && (
  <div>
    <label className="block text-sm font-medium text-orange-200 mb-1">Card Number</label>
    <input
      type="text"
      name="cardNumber"
      value={formData.cardNumber || ""}
      onChange={handleChange}
      required
      placeholder="Enter card number"
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    />
    <label className="block text-sm font-medium text-orange-200 mb-1 mt-2">Expiry Date</label>
    <input
      type="month"
      name="cardExpiry"
      value={formData.cardExpiry || ""}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    />
    <label className="block text-sm font-medium text-orange-200 mb-1 mt-2">CVV</label>
    <input
      type="password"
      name="cardCvv"
      value={formData.cardCvv || ""}
      onChange={handleChange}
      required
      placeholder="CVV"
      maxLength={3}
      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
    />
  </div>
)}

          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Your full address"
              rows={3}
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white resize-none"
            />
          </div>

         <div>
  <label className="block text-sm font-medium text-orange-200 mb-1">Purchase Date</label>
 <input
  type="date"
  name="purchaseDate"
  value={formData.purchaseDate}
  onChange={handleChange}
  required
  min={new Date().toISOString().split("T")[0]}  // restrict past dates
  className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white"
/>

</div>


          <div>
            <label className="block text-sm font-medium text-orange-200 mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any extra details"
              rows={3}
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-zinc-900 text-white resize-none"
            />
          </div>

         <button
  type="submit"
  className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md border border-transparent 
             hover:border-white  hover:text-black transition-colors duration-300"
>
  Book Now
</button>

        </form>
      </div>
    </div>
  );
};

export default BuyForm;
