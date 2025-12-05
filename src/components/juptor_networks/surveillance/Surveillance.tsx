import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Shield,
  Camera,
  Video,
  AlertCircle,
  Smartphone,
  Lock,
  Globe,
  Users,
  Home,
  Building,
  Check,
  Zap,
  Eye,
  Clock,
  Wifi,
  Server,
  Settings,
} from "lucide-react";

const Surveillance: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const surveillanceFeatures = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "HD Video Quality",
      description:
        "Crystal clear 4K surveillance with night vision capabilities",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Remote Access",
      description: "Monitor your property from anywhere via mobile app",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Real-time Alerts",
      description:
        "Instant notifications for motion detection and security breaches",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Encrypted Storage",
      description: "Secure cloud and local storage options for footage",
    },
  ];

  const otherServices = [
    {
      title: "Fibernetics",
      description:
        "High-speed fiber internet solutions for homes and businesses",
      icon: <Wifi className="w-6 h-6" />,
      link: "/fibernetics",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and network monitoring",
      icon: <Clock className="w-6 h-6" />,
      link: "/support",
    },
    {
      title: "Equipment & Accessories",
      description: "Supply of IT hardware, networking devices, and accessories",
      icon: <Server className="w-6 h-6" />,
      link: "/equipment",
    },
    {
      title: "Professionalism",
      description:
        "Expert team handling IT supplies, repairs, and maintenances",
      icon: <Settings className="w-6 h-6" />,
      link: "/professional",
    },
  ];

  const useCases = [
    {
      title: "Residential Security",
      description: "Protect your home and family with smart surveillance",
      icon: <Home className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
    },
    {
      title: "Business Protection",
      description: "Secure your commercial premises and assets 24/7",
      icon: <Building className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800",
    },
    {
      title: "Institutional Safety",
      description:
        "Comprehensive security for schools, hospitals, and government facilities",
      icon: <Users className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w-800",
    },
  ];

  const surveillanceSolutions = [
    {
      title: "Intelligent Motion Detection",
      description:
        "Advanced AI-powered motion sensing with human/vehicle differentiation",
      features: ["Smart Alerts", "False Alarm Reduction", "Custom Zones"],
    },
    {
      title: "24/7 Live Monitoring",
      description:
        "Continuous surveillance with zero downtime and instant playback",
      features: ["Real-time Streaming", "Cloud Backup", "Mobile Access"],
    },
    {
      title: "Access Control Systems",
      description: "Integrated security with biometric and card-based access",
      features: ["Facial Recognition", "Remote Lock/Unlock", "Access Logs"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-linear-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-3xl lg:text-5xl font-bold">
                  <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Surveillance Solutions
                  </span>
                </h1>
              </div>
              <p className="text-2xl lg:text-3xl font-bold mb-4">
                See Everything, Secure Everything
              </p>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Stay in control with our cutting-edge surveillance solutions,
                delivering real-time monitoring, and 24/7 protection. Whether
                it's your home, business, or property, our cutting-edge
                technology ensures total security and peace of mind—anytime,
                anywhere.
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-5 top-4 w-5 h-5 text-white/70" />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-xl transition-all duration-200"
                  >
                    Search
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Stay One Step Ahead – Smart Surveillance for Ultimate Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You get more than just cameras—you get intelligent security
                designed to keep you ahead of threats. Our advanced monitoring
                solutions offer high-definition video, motion detection, and
                real-time alerts, ensuring your home or business stays protected
                24/7.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Stay connected, stay secure, and stay in control from anywhere
                with our cutting-edge surveillance technology.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Perfect for</span> homes,
                  businesses, and institutions. Because True Security Means
                  Always Being One Step Ahead.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-20 h-20 text-gray-400" />
                </div>
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  <span className="font-bold">Live Monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Beyond Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-16"
          >
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 mr-4" />
              <h3 className="text-2xl lg:text-3xl font-bold">Beyond Vision</h3>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Intelligent Surveillance for Homes & Businesses - Whether
              safeguarding your home, office, or business premises, our
              surveillance solutions provide seamless remote access and 24/7
              reliability. Detect, prevent, and respond instantly with
              cutting-edge technology designed for total peace of mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {surveillanceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Total Control Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Total Control, Total Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
              You're always in charge. Our state-of-the-art security solutions
              give you full control over your home or business, no matter where
              you are. Enjoy real-time monitoring with high-definition video and
              smart alerts.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {surveillanceSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Surveillance Solutions For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden aspect-video mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {useCase.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Other{" "}
              <span className="text-blue-600 dark:text-blue-400">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of IT and network solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-200">
                  <span>Blog →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-linear-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Secure Your World Today
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of homes and businesses protected by our advanced
              surveillance systems. Get peace of mind with 24/7 security
              monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Camera className="w-5 h-5 mr-2" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Video className="w-5 h-5 mr-2" />
                View Demo
              </motion.button>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Installation within 24-48 hours | 30-day money-back guarantee |
              24/7 support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kobe Steel Reference */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Industry Proven
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our surveillance technology meets the highest industry standards,
              trusted by facilities like the Kobe Steel plant that supplied
              materials for major infrastructure projects worldwide.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Surveillance;
