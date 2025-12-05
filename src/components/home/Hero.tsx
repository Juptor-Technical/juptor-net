// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CompactContactForm from "./CompactContactForm";

const Hero: React.FC = () => {
  const stats = [
    { number: "100+", label: "Clients" },
    { number: "1M+", label: "Services" },
    { number: "800+", label: "Projects" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-900 via-purple-900 to-blue-800">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 md:top-1/4 md:left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-20 right-10 md:bottom-1/4 md:right-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp}>
              <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Innovative
                <motion.span
                  className="block bg-linear-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Technology
                </motion.span>
                <motion.span
                  className="block bg-linear-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Solutions
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed"
            >
              Juptor Innovations is a Digital Technology Company specializing in
              Networks, Visual, and Mobile solutions that drive your business
              forward.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg text-sm sm:text-base"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats - Made more compact */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm lg:max-w-md">
              <CompactContactForm />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Smaller and less prominent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
