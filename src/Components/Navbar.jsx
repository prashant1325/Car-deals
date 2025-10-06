import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenu(!menu);

  const handleProtectedRoute = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("⚠️ Please login first.");
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/signup");
  };

  // Keep isLoggedIn in sync with localStorage
  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    // Update when storage changes in another tab
    window.addEventListener("storage", updateLoginStatus);

    // Also update on mount
    updateLoginStatus();

    return () => window.removeEventListener("storage", updateLoginStatus);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/car", label: "Our Car" },
    { path: "/services", label: "Services" },
    { path: "/phone", label: "Contact Us" },
  ];

  return (
    <header className="fixed w-full z-10 bg-black text-white shadow-md">
      <nav className="w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <GiSteeringWheel size={50} className="text-orange-500" />
          <Link to="/" className="font-bold text-4xl">
            Velocity Motors Dealership
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleProtectedRoute(e, link.path)}
              className="hover:text-orange-400 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-orange-500"
            >
              Logout
            </button>
          ) : (
            <Link to="/signup">
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-orange-500 hover:text-black">
                Login <FaUserCircle size={20} />
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose
              size={30}
              onClick={handleMenuToggle}
              className="cursor-pointer hover:text-orange-400"
            />
          ) : (
            <RiMenuUnfoldFill
              size={30}
              onClick={handleMenuToggle}
              className="cursor-pointer hover:text-orange-400"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black text-white transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center py-8 space-y-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => {
                handleProtectedRoute(e, link.path);
                handleMenuToggle();
              }}
              className="hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                handleMenuToggle();
              }}
              className="bg-red-600 px-4 py-2 rounded-md hover:bg-orange-500"
            >
              Logout
            </button>
          ) : (
            <Link to="/signup" onClick={handleMenuToggle}>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-orange-500 hover:text-black">
                <FaUserCircle size={20} />
                Login
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
