import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-linear-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Juptor{" "}
              <span className="bg-linear-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Networks
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Experience a new level of seamless connectivity, collaboration and
              efficiency.
            </p>
            <p className="text-blue-100 mb-8">
              In a world that's increasingly connected, we believe that everyone
              should have the opportunity to harness the power of internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Pricing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Check availability in your area
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
