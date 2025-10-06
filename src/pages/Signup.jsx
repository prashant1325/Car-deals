import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLock,
  FaUser,
  FaCar,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Signup = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const DEFAULT_PASSWORD = "velocity123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      alert("✅ Registered successfully! Use password: velocity123 to login.");
      setIsRegister(false); // Switch to login
    } else {
      if (password === DEFAULT_PASSWORD) {
        alert("✅ Login successful!");

        // 🔒 Save login state and user info
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);

        navigate("/");
      } else {
        alert("❌ Incorrect password. Please register first.");
        setIsRegister(true); // Switch to register mode
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-center items-center bg-black w-1/2 text-orange-500 p-10 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <FaCar size={80} className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">Velocity Motors</h1>
          <p className="text-lg">
            {isRegister ? "Create your account" : "Login to explore car deals"}
          </p>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 bg-orange-500 flex items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={isRegister ? "register" : "login"}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md bg-black rounded-xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-extrabold text-center text-orange-500 mb-6">
              {isRegister ? "Register" : "Login"}{" "}
              <span className="text-white">Here</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <FaUser /> Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full mt-1 px-4 py-2 rounded-md bg-black text-white border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {isRegister && (
                <div>
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 px-4 py-2 rounded-md bg-black text-white border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <FaLock /> Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-1 px-4 py-2 pr-10 rounded-md bg-black text-white border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-orange-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-orange-500 py-2 rounded-md font-semibold hover:bg-orange-600 hover:text-black transition duration-300"
              >
                {isRegister ? "Register" : "Log In"}
              </button>
            </form>

            <p className="text-center mt-4 text-white text-sm">
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-orange-400 hover:underline"
              >
                {isRegister ? "Login" : "Register"}
              </button>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Signup;
