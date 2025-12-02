import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Wifi,
  Zap,
  Clock,
  DollarSign,
  ArrowUp,
  Shield,
  Users,
  Globe,
  Cpu,
  Check,
  Gamepad2,
  Book,
  Film,
  Download,
} from "lucide-react";

const Fibernetics: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pricingPackages = [
    {
      name: "Vimba Package",
      speed: "10-60mbps",
      price: "1000shs/user 24hrs",
      description:
        "Best suitable for internet fiber and satellite extensions to communities in busy setups like markets, trading centers and ghettos.",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Samba Package",
      speed: "10-60mbps",
      price: "35,000Shs /month",
      description:
        "Best suitable for internet fiber and satellite extensions to residential areas and homes in apartments, organized residential suburbs, closehome setup.",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Lumba Package",
      speed: "60mbps",
      price: "35,000Shs/month",
      description:
        "Best suitable for internet fiber and satellite extensions to commercial areas targeting busy businesses in arcades, malls, trading centers etc.",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Simba Package",
      speed: "60Mbps and above",
      price: "Charged per size of installation",
      description:
        "Best suitable for internet fiber and satellite extensions to institutions like hospitals, schools, government offices, NGos, parastatals.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const otherServices = [
    {
      title: "Surveillance",
      description:
        "Advanced security monitoring through CCTV systems and access control.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and network monitoring services.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Equipment & Accessories",
      description:
        "Supply of IT hardware, networking devices, and accessories.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "Professionalism",
      description:
        "Expert team handling IT supplies, repairs, and maintenances.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const whyChoose = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Super Fast Speeds",
      description: "Experience speeds up to 1Gbps for seamless connectivity.",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Reliable Connectivity",
      description: "Stay connected 24/7 with minimal downtime.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable Plans",
      description: "Choose a plan that fits your needs and budget.",
    },
    {
      icon: <ArrowUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Easily scale your connection for growing businesses.",
    },
  ];

  const whatWeOffer = [
    {
      title: "Site Surveying",
      description:
        "Assessing the area to determine the best cable routes and equipment placement.",
    },
    {
      title: "Excavation & Trenching",
      description: "Digging trenches to lay cables underground.",
    },
    {
      title: "Cable Laying",
      description:
        "Installing fiber optic cables or copper wires depending on the technology chosen.",
    },
    {
      title: "Equipment Installation",
      description:
        "Setting up network nodes, distribution points, and other necessary hardware.",
    },
    {
      title: "Terminating Connections",
      description: "Connecting cables to individual homes or businesses.",
    },
    {
      title: "Testing & Commissioning",
      description:
        "Verifying the network is functioning properly and meeting performance standards.",
    },
    {
      title: "Fault Detection & Repair",
      description:
        "Identifying and fixing network issues like cable damage or faulty equipment.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Regularly checking network speeds and capacity to identify potential problems.",
    },
    {
      title: "Cable Management",
      description:
        "Organizing and securing cables to prevent damage and interference.",
    },
    {
      title: "Equipment Upgrades",
      description:
        "Replacing outdated equipment with newer technology to improve performance.",
    },
    {
      title: "Security Updates",
      description:
        "Applying software patches to protect the network from cyber threats.",
    },
  ];

  const useCases = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gaming",
      description: "Lag-free online gaming experiences",
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Entertainment",
      description: "Buffer-free streaming and downloads",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Education",
      description: "Seamless online learning and research",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Business",
      description: "High-speed data transfers and video conferencing",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-linear-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                JuptorNetworks -{" "}
                <span className="bg-linear-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Fibernetics
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
                High-speed fiber internet solutions for homes, businesses, and
                institutions across Uganda.
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
                    className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
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

      {/* Introduction */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Network Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                JuptorNetworks handles installations, networking, servicing, and
                migrations. We install Local Area Networks (LAN) as well as Wide
                Area Networks (WAN) for different organizations, institutions,
                companies, or individuals.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We provide 24hr network support services to companies that we
                have installed our networks to make sure that the network they
                are using is up and running.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Perfect for</span> homes,
                  businesses, and institutions requiring consistent high-speed
                  connectivity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Unmatched Performance</h3>
              <p className="text-blue-100 mb-6">
                JuptorNetworks offers High Speed Unlimited Internet to our
                customers in our local communities and business centers to allow
                them enjoy all the movies, game play, studies, entertainment and
                all downloads they want.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-300 mr-3" />
                  <span>World-class technologies</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-300 mr-3" />
                  <span>Personalized professional service</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-300 mr-3" />
                  <span>Optimal productivity solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Pricing Packages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your needs with our flexible pricing
              options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`h-2 bg-linear-to-r ${pkg.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {pkg.speed}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold">
                      {pkg.price}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {pkg.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fibernetics */}
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
              <span className="text-blue-600 dark:text-blue-400">
                Fibernetics?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
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

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Perfect For
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {useCase.icon}
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {useCase.title}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">
                    {useCase.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What We{" "}
              <span className="text-blue-600 dark:text-blue-400">Offer</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive fiber internet solutions from installation to
              maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kids Connectivity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">
                  Empower Kids Connectivity
                </h3>
              </div>
              <p className="text-blue-100 mb-6">
                Empower Kids with High-Speed Internet Today – Fuel Their
                Learning, Creativity, and Endless Possibilities with the
                Unmatched Speed and Reliability of our internet.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Rural Connectivity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Rural Connectivity</h3>
              </div>
              <p className="text-green-100 mb-6">
                Connect Rural Communities with High-Speed Internet – Unlock
                Growth, Innovation, and Prosperity in the Heart of Rural Areas
                with the Unmatched Speed and Reliability of our internet.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Blog →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Experience Fibernetics?
            </h2>
            <p className="text-blue-100 mb-8">
              Join thousands of satisfied customers enjoying high-speed fiber
              internet across Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fibernetics;
