import React from "react";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconArrowRight,
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Segments", href: "#" },
    { name: "Support", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const services = [
    { name: "Juptor Networks", href: "#" },
    { name: "Juptor Mobile", href: "#" },
    { name: "Enterprise Solutions", href: "#" },
    { name: "Broadband Services", href: "#" },
    { name: "Medical Ecommerce", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  const certifications = [
    "NITA – U (National Information Technology Authority)",
    "Ministry of ICT - Uganda",
    "UPDF (Uganda People's Defence Force)",
    "PPDA - Uganda",
  ];

  // Using Tabler brand icons (non-deprecated)
  const socialLinks = [
    {
      icon: <IconBrandFacebook className="w-4 h-4" />,
      href: "#",
      name: "Facebook",
    },
    {
      icon: <IconBrandTwitter className="w-4 h-4" />,
      href: "#",
      name: "Twitter",
    },
    {
      icon: <IconBrandLinkedin className="w-4 h-4" />,
      href: "#",
      name: "LinkedIn",
    },
    {
      icon: <IconBrandInstagram className="w-4 h-4" />,
      href: "#",
      name: "Instagram",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center mb-6">
              {/* Juptor Logo */}
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="shrink-0 flex items-center"
                >
                  <img
                    src="/logo.png"
                    alt="Juptor Logo"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>
                <span className="ml-3 text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  Juptor
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Innovative Technology Solutions driving your business forward with
              cutting-edge networks, visual, and mobile solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-600 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <IconArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <IconArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Contact Info
            </h3>

            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <IconPhone className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-gray-600 dark:text-gray-400">
                    +256 754 962339
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    +256 312 110 233
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconMail className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  info.juptor@gmail.com
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <IconMapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  Kampala, Uganda
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                Newsletter
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Subscribe to receive future updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors duration-200 text-sm font-medium text-white"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800"
        >
          <h4 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white">
            Certified & Approved By
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 shadow-sm dark:shadow-md"
              >
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-300 dark:border-gray-800 bg-gray-200 dark:bg-black/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Juptor Logo"
                className="h-6 w-auto mr-2 object-contain"
              />
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} Juptor Innovations. All rights reserved.
              </div>
            </div>

            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
