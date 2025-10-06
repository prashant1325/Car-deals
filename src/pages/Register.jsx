import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaUserPlus, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration Submitted:", { username, password });
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="flex w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-orange-500">
        {/* Left branding panel */}
        <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-black text-orange-500 p-10">
          <FaCar size={80} className="mb-6" />
          <h1 className="text-4xl font-bold mb-2">Velocity Motors</h1>
          <p className="text-lg text-center">Join us and explore great deals!</p>
        </div>

        {/* Register form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 p-8 bg-orange-500"
        >
          <div className="bg-black p-8 rounded-xl shadow-xl text-white">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
              Register <span className="text-white">Here</span>
            </h2>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <FaUserPlus /> Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full mt-1 px-4 py-2 rounded-md bg-black text-white border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <FaLock /> Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-1 px-4 py-2 rounded-md bg-black text-white border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-orange-500 py-2 rounded-md font-semibold hover:bg-orange-600 hover:text-black transition duration-300"
              >
                Register
              </button>
            </form>

            <p className="text-sm mt-4 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline text-orange-400 hover:text-white transition"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
