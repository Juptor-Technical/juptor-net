import React from "react";
import { motion } from "framer-motion";
import { Wifi, Clock, DollarSign, Infinity } from "lucide-react";
import type { Service } from "../types";

const WhyChooseUs: React.FC = () => {
  const features: Service[] = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Reliable and superfast",
      description:
        "Juptor Network delivers reliable and superfast internet, ensuring seamless connectivity for homes and businesses.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 support",
      description:
        "Get round-the-clock support with our 24/7 customer service. We're always available to assist you anytime, anywhere.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable",
      description:
        "Enjoy top-quality service at a price that fits your budget. Reliable and affordable solutions for everyone.",
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Unlimited",
      description:
        "Enjoy unlimited internet bundles with no caps, no limits—stay connected anytime, anywhere.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{" "}
            <span className="text-blue-600 dark:text-blue-400">Us!</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We redefine connectivity and innovation with cutting-edge
            Fibernetics, advanced digitization, robust surveillance solutions,
            expert tech support, and high-quality IT equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
