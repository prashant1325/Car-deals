import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Dealership Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-orange-500 pb-2">
            Velocity <span className="text-orange-400 font-medium">Motors Dealership..</span>
          </h3>
          <p className="text-white text-sm leading-relaxed">
            Explore premium used cars, fully inspected and certified for quality. From SUVs to sedans, 
            we offer top deals, flexible financing, and expert service—guaranteed satisfaction with every drive.
            <span className="text-orange-400 font-medium"> Velocity Motors.</span>
          </p>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-orange-500 pb-2">Page <span className="text-orange-400 font-medium">Links..</span></h3>
          <div className="flex flex-col space-y-2 text-white">
            <Link to="/about/" className="hover:text-orange-400 transition-colors">About Us</Link>
            <Link to="/car" className="hover:text-orange-400 transition-colors">Our Cars</Link>
            <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
            <Link to="/phone" className="hover:text-orange-400 transition-colors">Contact Us</Link>
          </div>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-orange-500 pb-2">Used Cars <span className="text-orange-400 font-medium">for Sales..</span></h3>
          <div className="flex flex-col space-y-2 text-white">
            <Link to="/" className="hover:text-orange-400 transition-colors">Toyota Fortuner</Link>
            <Link to="/" className="hover:text-orange-400 transition-colors">Honda Civic</Link>
            <Link to="/" className="hover:text-orange-400 transition-colors">Hyundai Creta</Link>
            <Link to="/" className="hover:text-orange-400 transition-colors">Mahindra Thar</Link>
          </div>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-orange-500 pb-2">Learn <span className="text-orange-400 font-medium">More..</span> </h3>
          <div className="flex flex-col space-y-2 text-white">
            <Link to="/" className="hover:text-orange-400 transition-colors">User-Friendly</Link>
            <Link to="/" className="hover:text-orange-400 transition-colors">Search & Filters</Link>
            <Link to="/" className="hover:text-orange-400 transition-colors">Secure Payment</Link>
            <Link to="/" className="hover:text-orange-400 transition-colors">Geolocation Services</Link>
          </div>
        </div>
      </div>
<br></br>
      
      <div className="w-full flex justify-center items-center gap-5 mt-10 text-white text-2xl">
        <a href="#" className="hover:text-orange-400 transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-orange-400 transition"><FaInstagram /></a>
        <a href="#" className="hover:text-orange-400 transition"><FaTwitter /></a>
        <a href="#" className="hover:text-orange-400 transition"><FaLinkedinIn /></a>
      </div>

     
      <div className="mt-10 text-center text-base border-t border-orange-500 pt-6 text-gray-300">
        <p className="mb-2 text-lg">
          📍 <span className="text-orange-400 font-medium">123 Auto Street</span>, Car City, India • ☎{" "}
          <span className="hover:text-orange-400 transition duration-200 cursor-pointer">
            +91-9876543210
          </span>
        </p>
        <p className="text-md text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500 font-semibold text-lg">Velocity Motors</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
