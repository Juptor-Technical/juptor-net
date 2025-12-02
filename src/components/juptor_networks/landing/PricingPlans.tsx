import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingPlan } from "../types";

const PricingPlans: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Vimba Package",
      speed: "10-60 Mbps",
      description:
        "This package is best suitable for internet fiber and satellite extensions to communities in busy setups like markets, trading centers and ghettos.",
      price: "1,000 UGX/user 24hrs",
      features: ["Unlimited Wifi Internet", "24/7 support"],
      popular: false,
    },
    {
      name: "Samba Package",
      speed: "10-60 Mbps",
      description:
        "This package is best suitable for internet fiber and satellite extensions to residential areas and homes in apartments, organized residential suburbs, closehome setup.",
      price: "35,000 UGX/month",
      features: ["Unlimited Wifi Internet", "24/7 support"],
      popular: true,
    },
    {
      name: "Lumba Package",
      speed: "60 Mbps",
      description:
        "This package is best suitable for internet fiber and satellite extensions to commercial areas targeting busy businesses in arcades, malls, trading centers etc.",
      price: "35,000 UGX/month",
      features: ["Unlimited Wifi Internet", "24/7 support"],
      popular: false,
    },
    {
      name: "Simba Package",
      speed: "60+ Mbps",
      description:
        "This package is best suitable for internet fiber and satellite extensions to institutions like hospitals, schools, government offices, NGos, parastatals.",
      price: "Charged per size",
      features: ["Unlimited Wifi Internet", "24/7 support"],
      popular: false,
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Pricing Plans
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg ${
                plan.popular
                  ? "border-2 border-blue-500 relative"
                  : "border border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                  {plan.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  {plan.speed}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {plan.description}
              </p>

              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Get the Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
