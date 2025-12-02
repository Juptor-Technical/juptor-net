import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Headphones, Server, Award } from "lucide-react";
import type { Service } from "../types";

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fibernetics",
      description:
        "JuptorNetworks handles installations, networking, servicing, and migrations. We install Local Area Networks (LAN) as well as Wide Area Networks (WAN) for different organizations, institutions, companies or individuals.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Surveillance",
      description:
        "We offer advanced security monitoring through CCTV systems, access control, and real-time tracking. We provide custom security setups to safeguard businesses and homes.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description:
        "Our computerized monitoring equipment enables data recovery, rebooting, backup and antivirus installations.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Equipment & Accessories",
      description:
        "We supply a range of IT hardware and equipment, including computers, servers, networking devices, and accessories.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professionalism",
      description:
        "We have a great technical team that runs our IT supplies, repairs, and maintenances.",
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
            What Juptor Networks Offers{" "}
            <span className="text-blue-600 dark:text-blue-400">You!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
