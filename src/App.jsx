import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Car from './pages/Car';
import Services from './pages/Services';
import Phone from './pages/Phone';
import Signup from './pages/Signup';
import BuyForm from './Components/Car/BuyForm';
import BuySuccess from './pages/BuySuccess';
import SellYourCar from './pages/SellYourCar';
import SellSuccess from './pages/SellSuccess';
import ServiceForm from './pages/ServiceForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar will be available on all pages */}
      <div className="pt-20"> {/* Ensure the content is not hidden behind Navbar */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Static Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/car" element={<Car />} />
          <Route path="/services" element={<Services />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Buy and Sell pages */}
          <Route path="/buy" element={<BuyForm />} />
          <Route path="/buy-success" element={<BuySuccess />} />
          <Route path="/sell-car" element={<SellYourCar />} />
          <Route path="/sell-success" element={<SellSuccess />} />
          
          {/* Service form page for services */}
          <Route path="/service-form" element={<ServiceForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
