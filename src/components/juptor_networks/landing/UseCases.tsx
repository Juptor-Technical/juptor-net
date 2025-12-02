import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Tv, Download } from "lucide-react";
import type { UseCase } from "../types";

const UseCases: React.FC = () => {
  const useCases: UseCase[] = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Online Gaming",
      description:
        "Take gaming to the next level with high-speed internet, unlimited, ensuring lag-free experiences and unlocking the full potential of online gaming adventures.",
      cta: "Get Started Today",
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "Live Streaming",
      description:
        "Elevate your streaming experience with our high-speed internet, enjoy your entertainment with lightning-fast speeds, ensuring buffer-free streaming for an immersive, uninterrupted streaming experience.",
      cta: "Get Started Today",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Faster Downloads",
      description:
        "Unlock the Power of Lightning-Fast Downloads with Juptor Network – Seamless Speed, Unmatched Performance, and Reliability at Your Fingertips!",
      cta: "Get Started Today",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {useCase.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                {useCase.cta} →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
