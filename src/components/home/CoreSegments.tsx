// import React from "react";
// import { motion } from "framer-motion";
// import { Wifi, ShoppingCart, ArrowRight, Check } from "lucide-react";

// const CoreSegments: React.FC = () => {
//   const segments = [
//     {
//       id: "networks",
//       icon: <Wifi className="w-8 h-8" />,
//       title: "Juptor Networks",
//       subtitle: "Reliable Broadband Solutions",
//       description:
//         "Juptor Network delivers reliable broadband solutions, including fiber, wireless, and enterprise internet services. Experience fast and secure connectivity today.",
//       features: [
//         "Reliable and superfast internet",
//         "Unlimited and affordable plans",
//         "Fiber, wireless & enterprise solutions",
//         "24/7 customer support",
//       ],
//       image: "🌐",
//       color: "from-blue-500 to-blue-600",
//       buttonText: "Explore Networks",
//     },
//     {
//       id: "mobile",
//       icon: <ShoppingCart className="w-8 h-8" />,
//       title: "Juptor Mobile",
//       subtitle: "Medical Ecommerce Platform",
//       description:
//         "A fully featured medical eCommerce platform connecting vendors and retailers in the medical sector. Revolutionizing the medical supply chain with smart solutions.",
//       features: [
//         "Vendor & retailer connectivity",
//         "Medical supply chain management",
//         "Secure payment processing",
//         "Real-time inventory tracking",
//       ],
//       image: "💊",
//       color: "from-purple-500 to-purple-600",
//       buttonText: "Discover Mobile",
//     },
//   ];

//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Core{" "}
//             <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Segments
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Specialized solutions designed to meet the demands of homes,
//             businesses, and enterprises
//           </p>
//         </motion.div>

//         {/* Segments Grid */}
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
//         >
//           {segments.map((segment) => (
//             <motion.div
//               key={segment.id}
//               variants={fadeInUp}
//               whileHover={{ y: -5 }}
//               className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="p-6 lg:p-8">
//                 {/* Header */}
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-center space-x-4">
//                     <div
//                       className={`w-12 h-12 bg-linear-to-r ${segment.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
//                     >
//                       {segment.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
//                         {segment.title}
//                       </h3>
//                       <p className="text-gray-600 dark:text-gray-400 text-sm">
//                         {segment.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-4xl">{segment.image}</div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                   {segment.description}
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-3 mb-6">
//                   {segment.features.map((feature, featureIndex) => (
//                     <div
//                       key={featureIndex}
//                       className="flex items-center space-x-3"
//                     >
//                       <Check className="w-4 h-4 text-green-500 shrink-0" />
//                       <span className="text-gray-700 dark:text-gray-300 text-sm">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full bg-linear-to-r ${segment.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg`}
//                 >
//                   <span>{segment.buttonText}</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//               Need Help Choosing the Right Solution?
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
//               Our experts are ready to help you select the perfect solution for
//               your business needs.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
//             >
//               Contact Our Team
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CoreSegments;

import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Monitor,
  Smartphone,
  Sun,
  ArrowRight,
  Check,
} from "lucide-react";

const CoreSegments: React.FC = () => {
  const segments = [
    {
      id: "networks",
      icon: <Wifi className="w-8 h-8" />,
      title: "Juptor Networks",
      subtitle: "Reliable Broadband Solutions",
      description:
        "Juptor Network delivers reliable broadband solutions, including fiber, wireless, and enterprise internet services. Experience fast and secure connectivity today.",
      features: [
        "Reliable and superfast internet",
        "Unlimited and affordable plans",
        "Fiber, wireless & enterprise solutions",
        "24/7 customer support",
      ],
      image: "🌐",
      color: "from-blue-500 to-blue-600",
      buttonText: "Explore Networks",
    },
    {
      id: "visual",
      icon: <Monitor className="w-8 h-8" />,
      title: "Juptor Visual",
      subtitle: "Advertising Tools",
      description:
        "Comprehensive visual and advertising tools for businesses to enhance their brand presence and reach target audiences effectively.",
      features: [
        "Advanced advertising tools",
        "Digital signage solutions",
        "Interactive marketing platforms",
        "Content management systems",
      ],
      image: "📺",
      color: "from-green-500 to-green-600",
      buttonText: "View Visual Solutions",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Juptor Mobile",
      subtitle: "Medical Ecommerce Platform",
      description:
        "A fully featured medical eCommerce platform connecting vendors and retailers in the medical sector. Revolutionizing the medical supply chain with smart solutions.",
      features: [
        "Vendor & retailer connectivity",
        "Medical supply chain management",
        "Secure payment processing",
        "Real-time inventory tracking",
      ],
      image: "💊",
      color: "from-purple-500 to-purple-600",
      buttonText: "Discover Mobile",
    },
    {
      id: "green-energy",
      icon: <Sun className="w-8 h-8" />,
      title: "Juptor Green Energy",
      subtitle: "Clean & Sustainable Solutions",
      description:
        "Innovative clean energy solutions including eco-stoves, solar systems, and bio-fuel products for domestic and commercial use across East Africa.",
      features: [
        "Eco-stoves & bio-stoves",
        "Solar systems (domestic & commercial)",
        "Bio-fuel & lighting solutions",
        "Energy-efficient products",
      ],
      image: "🌱",
      color: "from-emerald-500 to-emerald-600",
      buttonText: "Explore Green Energy",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Segments
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized solutions designed to meet the demands of homes,
            businesses, and enterprises
          </p>
        </motion.div>

        {/* Segments Grid - EXACT SAME FORMAT AS ORIGINAL */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {segments.map((segment) => (
            <motion.div
              key={segment.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 lg:p-8">
                {/* Header - EXACT SAME LAYOUT */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-linear-to-r ${segment.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {segment.icon}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {segment.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {segment.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-4xl">{segment.image}</div>
                </div>

                {/* Description - EXACT SAME STYLE */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {segment.description}
                </p>

                {/* Features - EXACT SAME STYLE */}
                <div className="space-y-3 mb-6">
                  {segment.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - EXACT SAME STYLE */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-linear-to-r ${segment.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg`}
                >
                  <span>{segment.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - EXACT SAME AS ORIGINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help Choosing the Right Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Our experts are ready to help you select the perfect solution for
              your business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreSegments;
