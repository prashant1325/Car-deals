import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const BuySuccess = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 4000);

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2.5 : 100));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 p-8 rounded-2xl shadow-2xl text-center border border-orange-500/40 max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="text-green-500 w-16 h-16" />
        </motion.div>

        <h1 className="text-3xl font-extrabold text-orange-400 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-300 mb-4">Your car has been successfully booked. 🚗✨</p>

        <div className="relative w-full bg-zinc-800 rounded-full h-3 overflow-hidden mb-2">
          <motion.div
            className="bg-orange-500 h-full rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        <p className="text-xs text-gray-400">Redirecting to home in a moment...</p>
      </motion.div>
    </div>
  );
};

export default BuySuccess;
