import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  Monitor,
  Printer,
  Server,
  Wifi,
  Zap,
  Camera,
  Battery,
  Network,
  Check,
  Laptop,
  Cable,
  Headphones,
  ArrowRight,
  Building,
  Home,
  Users,
  Globe,
  Shield,
  Clock,
  Settings,
} from "lucide-react";

const Equipment: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const productCategories = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Computers & Workstations",
      items: ["Desktops", "Laptops", "Workstations", "Servers"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Printers & Scanners",
      items: ["LaserJet", "Inkjet", "Dot Matrix", "Scanners", "Plotters"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Power Solutions",
      items: ["UPS Systems", "Stabilizers", "Inverters", "Generators"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Equipment",
      items: ["Switches", "Routers", "Access Points", "Cables", "Racks"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Cable className="w-8 h-8" />,
      title: "Telecom Products",
      items: ["EPABX Systems", "Fax Machines", "Routers", "TP-Link Devices"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Accessories",
      items: ["Toners & Cartridges", "Digital Cameras", "Peripherals"],
      color: "from-indigo-500 to-indigo-600",
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
      title: "Surveillance",
      description: "Advanced security monitoring and CCTV systems",
      icon: <Shield className="w-6 h-6" />,
      link: "/surveillance",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and network monitoring",
      icon: <Clock className="w-6 h-6" />,
      link: "/support",
    },
    {
      title: "Professionalism",
      description:
        "Expert team handling IT supplies, repairs, and maintenances",
      icon: <Settings className="w-6 h-6" />,
      link: "/professional",
    },
  ];

  const productBrands = [
    { name: "Dell", color: "bg-blue-100 text-blue-800" },
    { name: "HP", color: "bg-purple-100 text-purple-800" },
    { name: "Lenovo", color: "bg-red-100 text-red-800" },
    { name: "Cisco", color: "bg-green-100 text-green-800" },
    { name: "TP-Link", color: "bg-orange-100 text-orange-800" },
    { name: "APC", color: "bg-indigo-100 text-indigo-800" },
    { name: "Epson", color: "bg-pink-100 text-pink-800" },
    { name: "Canon", color: "bg-yellow-100 text-yellow-800" },
  ];

  const useCases = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Office",
      description: "Reliable equipment for remote work and home businesses",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Enterprise",
      description:
        "Scalable solutions for large organizations and corporations",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Institutions",
      description:
        "Specialized equipment for schools, hospitals, and government",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Startups",
      description: "Cost-effective solutions for growing businesses",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Devices that deliver outstanding speed and reliability",
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Premium equipment with comprehensive warranties",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Expert Advice",
      description: "Professional guidance to match your specific needs",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "After-Sales Support",
      description: "Ongoing maintenance, licensing, and technical support",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-linear-to-br from-indigo-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Cpu className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-3xl lg:text-5xl font-bold">
                  Equipment &{" "}
                  <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Accessories
                  </span>
                </h1>
              </div>
              <p className="text-2xl lg:text-3xl font-bold mb-4">
                Tech That Works as Hard as You Do
              </p>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                We provide high-performance IT equipment designed to keep up
                with your pace. Whether you're tackling complex projects,
                managing a business, or running demanding software, our
                reliable, durable technology ensures you never miss a beat.
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
                The Right Tools for the Job – Top-Quality IT Equipment for Every
                Need!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We supply equipment at attractive prices and advise our clients
                on ideal products with competitive pricing. We offer excellent
                after-sales services including warranty, product licensing,
                maintenance, and support.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Upon request to purchase a computer and related equipment, we
                conduct a needs analysis to assess your requirements. We then
                recommend computers and accessories with specifications that
                will deliver as per your needs.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Perfect for</span> homes,
                  businesses, and institutions. Equip yourself with the best –
                  because the right tools make all the difference.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Our Products Include
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>Desktops, Workstations, Laptops, Servers</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>
                      Printers ‐ Inkjet, LaserJet, Dot Matrix, Line Printers,
                      Plotters
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>
                      Power products ‐ Stabilizers, UPS, Inverters, Generators
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>
                      Networking Products ‐ Switches, Cards, Cables, Racks,
                      Trunkings
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Unleash Your Potential Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-16"
          >
            <div className="flex items-center mb-6">
              <Zap className="w-10 h-10 mr-4" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Unleash Your Potential
              </h3>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Our top-of-the-line devices are designed to deliver outstanding
              performance, reliability, and speed, empowering you to achieve
              your full potential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Product Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Products & Services
            </h3>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                    Telecommunication Products
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "EPABX Systems",
                      "Fax Machines",
                      "Network Cables",
                      "Routers",
                      "TP-Link Devices",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                    Other Essentials
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Wireless Products",
                      "Access Points",
                      "Wireless Cards",
                      "Copiers",
                      "Digital Cameras",
                      "Toners & Cartridges",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  Please note that our products come in different brands to best
                  fit you, our client.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Trusted Brands
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {productBrands.map((brand, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-full font-medium ${brand.color}`}
                >
                  {brand.name}
                </motion.span>
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
              Perfect For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                    {useCase.icon}
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

      {/* Invest in the Best Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Invest in the Best
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              We believe that quality technology is an investment in your
              future. Our premium IT equipment delivers the performance,
              reliability, and durability you need to stay ahead of the
              competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Cpu className="w-5 h-5 mr-2" />
                Browse Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Printer className="w-5 h-5 mr-2" />
                Request Quote
              </motion.button>
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
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Industry Standard
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Major Organizations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our equipment meets the highest industry standards, trusted by
              facilities like the Kobe Steel plant that supplied materials for
              major infrastructure projects worldwide.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
