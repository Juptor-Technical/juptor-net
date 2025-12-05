import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Check,
  Globe,
  Shield,
  MapPin,
  Network,
  Smartphone,
  Sun,
  Award,
  ShieldCheck,
} from "lucide-react";

const AboutUs: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const coreValues = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Inclusivity",
      description: "Ensuring our solutions are accessible to everyone.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Accessibility",
      description: "Making technology available across communities.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Dedication",
      description: "Committed to socio-economic development.",
    },
  ];

  const services = [
    {
      icon: <Network className="w-5 h-5" />,
      title: "Networks",
      items: ["Broadband", "Infrastructure", "Digitization", "Tech Support"],
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Visual",
      items: ["Advertising Tools"],
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile",
      items: [
        "Order Management",
        "Delivery Tracking",
        "Payment Processing",
        "Credit Support",
        "Stock Management",
      ],
    },
    {
      icon: <Sun className="w-5 h-5" />,
      title: "Green Energy",
      items: [
        "Eco-stoves & Bio-stoves",
        "Bio-fuel & Lighting Solutions",
        "Solar Systems (Domestic & Commercial)",
        "Energy-efficient Products",
      ],
    },
  ];

  const managementTeam = [
    {
      name: "Technology Director",
      role: "Digital Solutions & IT Management",
      expertise: "15+ years in enterprise technology",
    },
    {
      name: "Business Development",
      role: "B2B Enterprise Marketing",
      expertise: "Extensive market relations across East Africa",
    },
    {
      name: "Operations Manager",
      role: "Regional Operations & Green Energy Innovations",
      expertise: "Multi-country business management",
    },
  ];

  const certifications = [
    {
      icon: <Award className="w-4 h-4" />,
      title: "Fully Incorporated",
      description:
        "Registered in Uganda (2017) according to Company Registration Act",
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "NITA-U Certified",
      description: "National Information Technology Authority Uganda Certified",
    },
  ];

  const greenEnergyStats = [
    { value: "100+", label: "Clean Energy Products Sold" },
    { value: "85%", label: "Cooking Costs Saved" },
    { value: "10,000+", label: "Stoves Target (3 Years)" },
    { value: "200,000", label: "Trees to be Saved" },
  ];

  const regionalPresence = [
    {
      country: "Uganda",
      flag: "🇺🇬",
      description: "Headquarters & Main Operations",
      status: "Since 2017",
      color: "from-blue-500 to-blue-600",
    },
    {
      country: "Tanzania",
      flag: "🇹🇿",
      description: "East African Operations",
      status: "Branch Office",
      color: "from-green-500 to-green-600",
    },
    {
      country: "South Sudan",
      flag: "🇸🇸",
      description: "Regional Operations",
      status: "Branch Office",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      country: "Rwanda",
      flag: "🇷🇼",
      description: "Regional Operations",
      status: "Branch Office",
      color: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-linear-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/pics/IMG_4116.JPG")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              About{" "}
              <span className="bg-linear-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Juptor
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto">
              A Digital Technology Company specializing in Networks, Visual,
              Mobile and Green Energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Easily
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Juptor Innovations is a Digital Technology Company
                  specializing in Networks, Visual, Mobile, and Green Energy.
                  Incorporated in Uganda in 2017 and legally operates other
                  branches in Tanzania, South Sudan, and Rwanda.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our operations are driven by an outstanding mission that
                  emphasizes commitment to quality, value addition, fair prices,
                  and satisfaction to all our customers.
                </p>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={fadeInUp} className="mb-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Legal & Certification
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                          {cert.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {cert.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-40 lg:h-48 overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src="/pics/IMG_3768.JPG"
                    alt="Juptor team collaboration"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-28 lg:h-32 overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src="/pics/IMG_3781.JPG"
                    alt="Technology infrastructure"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-3 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-28 lg:h-32 overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src="/pics/IMG_3792.JPG"
                    alt="Digital solutions"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-40 lg:h-48 overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src="/pics/IMG_3863.JPG"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What We Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive digital and clean energy solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Our{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Foundation
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built on strong principles that guide our innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 grow">
                To empower communities through unique digital innovations.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 grow">
                To provide our customers with innovations that simplify lives.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Core Values
              </h3>
              <div className="space-y-3 grow">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-gray-600 dark:text-gray-400 shrink-0 mt-0.5">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Regional Presence - UPDATED TO INCLUDE ALL COUNTRIES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Regional Presence
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Serving communities across East Africa with innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {regionalPresence.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-linear-to-br ${country.color} rounded-xl p-5 text-white shadow-lg`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{country.flag}</div>
                    <div>
                      <h4 className="text-xl font-bold">{country.country}</h4>
                      <p className="text-white/80 text-sm">{country.status}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-3">
                    {country.description}
                  </p>
                  <div className="flex items-center text-white/70 text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>East Africa Region</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    4
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    5+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    100+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Satisfied Clients
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Green Energy Innovation */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Green Energy{" "}
              <span className="text-green-600 dark:text-green-400">
                Innovation
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Clean, affordable, and sustainable energy solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white mr-3">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Sustainable Energy Solutions
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We deliver standard, clean, and efficient energy solutions
                  suitable for both commercial and domestic purposes. Over 95%
                  of Ugandans depend on biomass as their source of energy.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our innovative technology makes clean energy cheaper and
                  cost-effective, helping promote conservation of natural
                  forests and saving communities up to 85% of their cooking
                  costs.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div variants={fadeInUp} className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {greenEnergyStats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Explore Green Energy</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Green Energy Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-32 lg:h-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Clean energy solutions"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-24 lg:h-32"
                >
                  <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Solar energy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-3 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-24 lg:h-32"
                >
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Energy efficient products"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-32 lg:h-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1724041875334-0a6397111c7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sustainable energy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Management{" "}
                  <span className="text-blue-600 dark:text-blue-400">Team</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our management team has an excellent background in digital
                  solutions, IT management, green energy innovations,
                  business-to-business enterprise marketing, and extensive
                  business relations across East Africa.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We understand the ICT business environment in East Africa and
                  are committed to offering quality services to achieve and
                  exceed our customers' business requirements and expectations.
                </p>
              </motion.div>

              {/* Team Highlights */}
              <motion.div variants={fadeInUp} className="space-y-3">
                {managementTeam.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {member.role}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Team Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <img
                  src="/pics/IMG_4045.JPG"
                  alt="Leadership team meeting"
                  className="w-full h-48 lg:h-56 object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src="/pics/IMG_4113.JPG"
                    alt="Team collaboration"
                    className="w-full h-24 lg:h-28 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src="/pics/IMG_4116.JPG"
                    alt="Strategic planning"
                    className="w-full h-24 lg:h-28 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-blue-100 mb-6">
              Join businesses across East Africa that trust Juptor for
              innovative digital and clean energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
