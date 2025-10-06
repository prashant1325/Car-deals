import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SellSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <motion.div
        className="bg-white/10 backdrop-blur-xl text-white p-8 rounded-2xl border border-orange-400 shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-orange-500 drop-shadow mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🎉 Success!
        </motion.h2>

        <motion.p
          className="text-lg text-center text-white/90 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your car has been successfully listed for sale.
        </motion.p>

        <motion.p
          className="text-sm text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Redirecting you to the home page...
        </motion.p>

        <motion.div
          className="mt-6 w-full h-2 bg-orange-500 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.8, delay: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default SellSuccess;
