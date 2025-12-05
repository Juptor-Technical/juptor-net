import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Headphones,
  Server,
  Award,
  ArrowRight,
} from "lucide-react";
import type { Service } from "../types";
import { useNavigate } from "react-router";

const Services: React.FC = () => {
  const navigate = useNavigate();
  const services: Service[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fibernetics",
      description:
        "JuptorNetworks handles installations, networking, servicing, and migrations. We install Local Area Networks (LAN) as well as Wide Area Networks (WAN) for different organizations, institutions, companies or individuals.",
      link: "/networks/fibernetics",
      features: [
        "LAN/WAN Installations",
        "Network Migrations",
        "Professional Servicing",
        "Enterprise Solutions",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Surveillance",
      description:
        "We offer advanced security monitoring through CCTV systems, access control, and real-time tracking. We provide custom security setups to safeguard businesses and homes.",
      link: "/networks/surveillance",
      features: [
        "CCTV Systems",
        "Access Control",
        "Real-time Tracking",
        "Custom Security Setups",
      ],
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description:
        "Our computerized monitoring equipment enables data recovery, rebooting, backup and antivirus installations. Round-the-clock technical assistance for all your IT needs.",
      link: "/networks/support",
      features: [
        "Data Recovery",
        "System Monitoring",
        "Backup Solutions",
        "Antivirus Protection",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Equipment & Accessories",
      description:
        "We supply a range of IT hardware and equipment, including computers, servers, networking devices, and accessories. Quality products with warranty and support.",
      link: "/networks/equipment",
      features: [
        "IT Hardware",
        "Networking Devices",
        "Servers & Computers",
        "Accessories & Peripherals",
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Services",
      description:
        "We have a great technical team that runs our IT supplies, repairs, and maintenances. Professional consultation and implementation services.",
      link: "/networks/professional",
      features: [
        "IT Consultancy",
        "Repairs & Maintenance",
        "Technical Team",
        "Implementation Services",
      ],
    },
  ];

  const handleServiceClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    navigate(link);
  };

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
            What Juptor Networks Offers{" "}
            <span className="text-blue-600 dark:text-blue-400">You!</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions with professional support. Click any
            service for more details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-pointer"
              onClick={(e) => handleServiceClick(e, service.link!)}
            >
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && (
                  <div className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-xs">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* More Details Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                  More Details
                </span>
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="text-blue-600 dark:text-blue-400"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Need Custom IT Solutions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
              Contact us for personalized IT solutions tailored to your specific
              business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
